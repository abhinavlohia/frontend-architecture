import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

// Create a mutex lock to prevent multiple simultaneous refresh calls
class Mutex {
    private current = Promise.resolve();
    get isLocked() {
        return this.current !== Promise.resolve();
    }
    waitForUnlock() {
        return this.current;
    }
    acquire() {
        let release: () => void = () => { };
        this.current = new Promise((resolve) => {
            release = resolve;
        });
        return release;
    }
}
const mutex = new Mutex();

const refreshBaseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:3000' });

export const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    await mutex.waitForUnlock();
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        if (!mutex.isLocked) {
            const release = mutex.acquire();
            try {
                // Determine the refresh payload. Backend expects { userId, refreshToken }
                // So we need to pull them from the state. 
                const state = api.getState() as { auth?: { refreshToken?: string, userId?: string } };
                const token = state.auth?.refreshToken;
                const userId = state.auth?.userId;

                // Note: The backend ONLY exposes auth.refresh via microservice right now.
                // If it were an HTTP endpoint, it would look like this:
                const refreshResult = await refreshBaseQuery(
                    { url: '/auth/refresh', method: 'POST', body: { refreshToken: token, userId } },
                    api,
                    extraOptions
                );

                if (refreshResult.data) {
                    const data = refreshResult.data as { success?: boolean; tokens?: { accessToken: string; refreshToken: string } };
                    if (data.success && data.tokens && userId) {
                        // We dispatch a generic action that authSlice can listen to, or we dispatch directly.
                        api.dispatch({ type: 'auth/setCredentials', payload: { ...data.tokens, userId } });
                        result = await baseQuery(args, api, extraOptions);
                    } else {
                        api.dispatch({ type: 'auth/logout' });
                    }
                } else {
                    api.dispatch({ type: 'auth/logout' });
                }
            } finally {
                release();
            }
        } else {
            // Wait until mutex is available to retry
            await mutex.waitForUnlock();
            result = await baseQuery(args, api, extraOptions);
        }
    }

    return result;
};
