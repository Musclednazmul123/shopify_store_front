
import { createApi,  fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import type { Post } from '@/types'
import { NEXT_PUBLIC_STORE_API } from '../env.vars.js'


export const shopifyApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({baseUrl: NEXT_PUBLIC_STORE_API}),
  tagTypes: ['Post'],
  endpoints: (builder)=>({
    getShopify: builder.query({
      query:(route)=>`${route}`,
      providesTags: ['Post'],
    }),

    postShopify: builder.mutation<Post, Partial<Post> & Pick<Post, 'url'>>({
      query: ({ url, body }) => ({
        url: `${url}`,
        method: 'Post',
        body: body,
      }),
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response: { response: Post }, meta, arg) => response.response,
      // Pick out errors and prevent nested properties in a hook or selector
      transformErrorResponse: (
        response: { status: string | number },
        meta,
        arg
      ) => response.status,
      invalidatesTags: ['Post'],
      // onQueryStarted is useful for optimistic updates
      // The 2nd parameter is the destructured `MutationLifecycleApi`
      async onQueryStarted(
        arg,
        { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
      ) {},
      // The 2nd parameter is the destructured `MutationCacheLifecycleApi`
      async onCacheEntryAdded(
        arg,
        {
          dispatch,
          getState,
          extra,
          requestId,
          cacheEntryRemoved,
          cacheDataLoaded,
          getCacheEntry,
        }
      ) {},
    }),
  }),
});


export const { useGetShopifyQuery, usePostShopifyMutation } = shopifyApi

