import AllProducts from '@/components/AllProducts'
import { Hero } from '@/components/Banners'
import Layout from '@/components/Layout'
import { Loading } from '@/components/Loadings'
import { useGetShopifyQuery } from '@/slice/shopifySlice'
import { useState } from 'react'
import {Error} from '@/components/Error'
import { Products } from '@/types'
import {homePageHeroData, homepageIconCardData2,  ourproduct, homepageIconCardData, newproduct, videosection} from "@/data/homepagedata.js"
import { IconCard } from "@/components/Cards"
import Footer from '@/components/Footer'
import {SocialIcons} from "@/components/Icons"
import FAQSection from '@/components/FaqSection'



export default function Home() {
  const [page, setPage]=useState<string | null>(null)

    const {data, error, isLoading} = useGetShopifyQuery(`/product?page=${page}`)
    const {title, description, img, url}=homePageHeroData
    if (isLoading){
       return (<Layout title='Home'>
       <Hero title={title} description={description} img={img} url={url} />
       <Loading />
     </Layout>)
    } 

    if(error || data.error){
      console.log(error)
      console.log(data.error)
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
      <div className='grid grid-cols-3 max-w-[1280px] mx-auto justify-center items-center'>
        {homepageIconCardData?.map((item:any, index:any)=><div className='mx-auto max-w-[300px]' key={`${item.title}-${index}`}>
          <IconCard title={item.title} description={item.description} scheme={item.scheme} iconsrc={item.iconsrc} />
          </div>)
        }
      </div>
      
      <AllProducts title={ourproduct.title} description={ourproduct.description} isGreen={true} products={products} next={()=>nextPage()} previous={()=>previousPage()} />
      <AllProducts title={newproduct.title} description={newproduct.description} isGreen={false} products={products} next={()=>nextPage()} previous={()=>previousPage()} />
      <div>
        <div className='max-w-[678px] mx-auto'>
          <h2 className='mx-auto max-w-[678px] text-center text-2xl font-bold tracking-tight text-gray-900 mb-5'>Vape Product</h2>
          <p className=' w-full text-center'>Elevate Your Vaping Experience with Cutting-Edge Vape Products Designed for Unmatched Flavor and Performance</p>
        </div>
        <div className='grid mt-20 grid-cols-3 gap-10 max-w-[1280px] mx-auto justify-center items-center'>
          {homepageIconCardData2?.map((item:any, index:any)=><div className='mx-auto max-w-[300px]' key={`${item.title}-${index}`}>
            <IconCard titleTop  title={item.title} description={item.description} scheme={item.scheme} iconsrc={item.iconsrc} />
            </div>)
          }
        </div>
      </div>

      <div className='mt-20'>
        <div className='max-w-[678px] mx-auto'>
          <h2 className='mx-auto max-w-[678px] text-center text-2xl font-bold tracking-tight text-gray-900 mb-5'>Vape Product</h2>
          <p className=' w-full text-center'>Elevate Your Vaping Experience with Cutting-Edge Vape Products Designed for Unmatched Flavor and Performance</p>
        </div>
        <Hero btn={"Discover Now"} subtitle={videosection.sub_title} description={videosection.description} video={videosection.video} url={url} />
      </div>

      <FAQSection />

      <SocialIcons />
      <Footer />
    </Layout>
  )
}
