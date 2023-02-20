import { useRouter } from 'next/router'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import {fetchdata} from '@/config/fetch.js'

import { ProductDetails } from '@/components/ProductDetails'
import { SkelitionProductDetails } from '@/components/Skelitions'
import {Error} from '@/components/Error'
import { Breadcrumbs } from '@/components/Breadcrumbs'


export default function Product({data}:any) {
  
  const router = useRouter()
  
  const { handle } = router.query
  if (!data){
    return <SkelitionProductDetails />
  }
  if (!data.product){
    return <Error />
  }
  const product = data.product
  let variant = product.variants
  const varaiantId = variant.nodes[0].id
  return (
    <> 
      <Head>
          <title>{handle}</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className='px-20 md:px-10 sm:px-2'>
        <Breadcrumbs />
        <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                <div className="flex flex-col md:flex-row -mx-4">
                    {/* Image with slider */}
                    <div className="md:flex-1 px-4">
                        
                    </div>
                    {/* Product information */}
                    <div className="md:flex-1 px-4">
                      <ProductDetails title={product.title} description={product.description} amount={`${variant.nodes[0].price.amount}`} currency={variant.nodes[0].price.currencyCode} id={varaiantId} variants={product.variants} /> 
                    </div>
                </div>
            </div>
        </div>
            
    </div>
    </>
  )
}


export const getServerSideProps: GetServerSideProps =async (context) => {
  const res = await fetchdata(`/product/${context.query.handle}`, {
      limit:1
  })
  return{
      props:{
          data: res
      }
  }
}