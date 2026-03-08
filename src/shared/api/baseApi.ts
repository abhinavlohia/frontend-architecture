import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './baseQueryWithReauth';

/**
 * Configure the base API with the re-auth query interceptor.
 * We leave the endpoints empty here, and use injectEndpoints
 * in specific feature slices.
 */
export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['User', 'Profile', 'MasterData'],
    endpoints: () => ({}),
});
 