
import { ThunkDispatch } from '@reduxjs/toolkit';
import { createApi,  fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({baseUrl: process.env.NEXT_PUBLIC_STORE_API || "localhost:5000"}),
  endpoints: (builder)=>({
    getAllProducts: builder.query({
      query:(route)=>`${route}`,
    }),
  }),
});


export const { useGetAllProductsQuery } = productsApi

