
import { createApi,  fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import type { Post } from '@/types'

export const shopifyApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({baseUrl: process.env.NEXT_PUBLIC_STORE_API || "localhost:5000"}),
  tagTypes: ['Post'],
  endpoints: (builder)=>({
    getShopify: builder.query({
      query:(route)=>`${route}`,
    }),

    postShopify: builder.mutation<Post, Partial<Post> & Pick<Post, 'url'>>({
      query: ({ url, body }) => ({
        url: `${url}`,
        method: 'Post',
        body: body,
      }),
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response: { data: Post }, meta, arg) => response.data,
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

