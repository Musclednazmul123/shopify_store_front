import { useRouter } from 'next/router'
import {useGetShopifyQuery} from '@/slice/shopifySlice'
import { ProductDetails } from '@/components/ProductDetails'
import {Error} from '@/components/Error'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { useEffect, useState } from 'react'
import { Loading } from '@/components/Loadings'
import { ImageWithThumb } from '@/components/ProductMedia'
import Layout from '@/components/Layout'


export default function Product() {
  
  const router = useRouter()
  
  const { handle } = router.query

  const [page, setPage]=useState<string | null>(null)
  

  const {data, error, isLoading} = useGetShopifyQuery(`product/${handle}?page=${page}`)


  if (isLoading){
    return <Loading/>
  }
  if (error || !data || data.error){
    return <Error />
  }
  const product = data.response.product
  console.log(product)
  let variant = product.variants
  const varaiantId = variant.nodes[0].id
  return (
    <Layout title={"Product Details"}>
        <div className='px-20 md:px-10 sm:px-2'>
          <Breadcrumbs />
          <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                  <div className="flex flex-col md:flex-row -mx-4">
                      {/* Image with slider */}
                      <div className="md:flex-1 px-4">
                          <ImageWithThumb images={product.images.edges} />
                      </div>
                      {/* Product information */}
                      <div className="md:flex-1 px-4">
                        <ProductDetails title={product.title} description={product.description} amount={`${variant.nodes[0].price.amount}`} currency={variant.nodes[0].price.currencyCode} id={varaiantId} variants={product.variants} /> 
                      </div>
                  </div>
              </div>
          </div> 
        </div>
    </Layout>
  )}


// export const getServerSideProps: GetServerSideProps =async (context) => {
//   const res = await fetchdata(`/product/${context.query.handle}`, {
//       limit:1
//   })
//   return{
//       props:{
//           data: res
//       }
//   }
// }

