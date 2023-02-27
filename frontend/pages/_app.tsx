import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '@/store/store'
import { Provider } from 'react-redux'
import {ApiProvider} from '@reduxjs/toolkit/query/react'
import {shopifyApi} from '../slice/shopifySlice'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Provider store={store}>
      <ApiProvider api={shopifyApi}>
        <Component {...pageProps} />
      </ApiProvider>
      
    </Provider>
    
  ) 
}
