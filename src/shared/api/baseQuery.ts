import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Extract this so we can type state without circular dependencies
interface RootStateWithAuth {
    auth: {
        accessToken: string | null;
        refreshToken: string | null;
    };
}

export const baseQuery = fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootStateWithAuth).auth?.accessToken;

        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }

        return headers;
    },
});
