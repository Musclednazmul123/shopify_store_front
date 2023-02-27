import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import{shopifyApi} from "../slice/shopifySlice"

export const store = configureStore({
    reducer: {
        [shopifyApi.reducerPath]:shopifyApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(shopifyApi.middleware),
})

setupListeners(store.dispatch)