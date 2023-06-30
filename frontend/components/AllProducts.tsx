import { useState } from 'react'
import {Error} from './Error'
import {useGetShopifyQuery} from '../slice/shopifySlice'
import { Button } from './Button'
// import {Products} from '@/types'
import { ProductCard, ProductCardGreen } from './Cards'
import { Loading } from './Loadings'
import { Paginate } from './Icons'

interface Products{
    products:any,
    next: () => void,
    previous: () => void,
    isGreen?:Boolean,
    title?:String,
    description?:String
}

export default function AllProducts({products, title, description, next, previous, isGreen}:Products){

    // Page is a query string for getting product of a specefic product by paginate from shopify store
    //Ex: `after:"cursor"`

    return <>
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="mx-auto max-w-[678px] text-center text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
                <p className='mx-auto my-5 max-w-[678px] text-center'>{description}</p>
                <div  className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">

                {products  && products.edges.length>0 ? products.edges.map((product:any, index:Number)=>
                <div key={product.node.id}>
                    {isGreen ? <ProductCardGreen product={product} />: <ProductCard product={product} />}
                </div>
                ):"No product to show"}
                </div>
                <div className='w-full flex justify-center items-center gap-5'>
                    <Button title='Previous' action={previous} >
                        <Paginate is_active={products?.pageInfo?.hasPreviousPage}/>
                    </Button>
                    <Button title='Next' action={next} >
                        <Paginate next is_active={products?.pageInfo?.hasNextPage}/>
                    </Button>
                </div>
            </div>
        </div>
    </>
}
    