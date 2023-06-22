import AllProducts from '@/components/AllProducts'
import { Hero } from '@/components/Banners'
import { Header } from '@/components/Header'
import Layout from '@/components/Layout'
import { Loading } from '@/components/Loadings'
import { useGetShopifyQuery } from '@/slice/shopifySlice'
import { useState } from 'react'
import {Error} from '@/components/Error'
import { Products } from '@/types'
import {homePageHeroData} from "@/data/heros"

export default function Home() {
  const [page, setPage]=useState<string | null>(null)
    const {data, error, isLoading} = useGetShopifyQuery(`product?page=${page}`)
    const {title, description, img, url}=homePageHeroData

    if (isLoading){
       return (<Layout title='Home'>
       <Hero title={title} description={description} img={img} url={url} />
       <Loading />
     </Layout>)
    } 

    if(error || data.error){
        return <Error />
    }

    let products: Products | null = data.response.products || null
    const nextPage =()=>{
        if (products?.pageInfo?.hasNextPage){
            setPage(`after:"${products.edges[products.edges.length - 1].cursor}"`)
        }
    }

    const previousPage =()=>{
        if (products?.pageInfo?.hasPreviousPage){
            setPage(`before:"${products.edges[0].cursor}"`)
        }
    }
  
  return (
    <Layout title='Home'>
      <Hero title={title} description={description} img={img} url={url} />
      <AllProducts products={products} next={()=>nextPage()} previous={()=>previousPage()} />
    </Layout>
  )
}
