import { baseApi } from '../../../shared/api/baseApi';

export interface LoginRequest {
    email?: string;
    password?: string;
}

export interface RegisterRequest {
    email?: string;
    password?: string;
}

export interface AuthResponse {
    success: boolean;
    user?: unknown;
    tokens?: { accessToken: string; refreshToken: string; };
    error?: string;
}

export interface LogoutRequest {
    userId: string;
    refreshToken?: string;
}

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse, LoginRequest>({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        register: builder.mutation<AuthResponse, RegisterRequest>({
            query: (userData) => ({
                url: '/auth/register',
                method: 'POST',
                body: userData,
            }),
        }),
        logout: builder.mutation<unknown, LogoutRequest>({
            query: (logoutData) => ({
                url: '/auth/logout',
                method: 'POST',
                body: logoutData,
            }),
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    dispatch(baseApi.util.resetApiState());
                    dispatch({ type: 'auth/logout' });
                } catch {
                    // Ignore error on logout
                }
            },
        }),
    }),
    overrideExisting: false,
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = authApi;
