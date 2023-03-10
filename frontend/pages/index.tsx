import AllProducts from '@/components/AllProducts'
import { Hero } from '@/components/Banners'
import { Header } from '@/components/Header'
import Head from 'next/head'

export default function Home() {
  
  return (
    
    <>
      <Head>
          <title>Home</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Hero />
      <AllProducts />
    </>
  )
}
