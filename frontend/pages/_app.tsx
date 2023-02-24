import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '@/store'
import { Provider } from 'react-redux'
import {ApiProvider} from '@reduxjs/toolkit/query/react'
import {productsApi} from '../slice/productsSlice'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Provider store={store}>
      <ApiProvider api={productsApi}>
        <Component {...pageProps} />
      </ApiProvider>
      
    </Provider>
    
  ) 
}
