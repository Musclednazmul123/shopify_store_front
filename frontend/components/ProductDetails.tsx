import { useEffect, useState } from 'react'
import {fetchdata} from '../config/fetch.js'
import { Breadcrumbs } from './Breadcrumbs'
import { SkelitionProductDetails } from './Skelitions'
import {Error} from './Error'
import { ProductDetailsFooter } from './ProductDetailsFooter'



interface Props{
    handle: String
}

export const ProductDetails =({handle}:Props)=>{
    const [product, setProduct] = useState<any>({})
    const [loading, setLoading]=useState<Boolean>(false)

    useEffect(()=>{
        setLoading(true)
        fetchdata(`/product/${handle}`, {
        limit:1
        }).then((data)=>{
        if(data){
            setProduct(data.product) 
        } else {
            setProduct(null) 
        }
        setLoading(false)
        })
        
    },[handle])
    // loading
    if (loading){
        return <SkelitionProductDetails />
    }
    if (!product){
        return <Error />
    }

    
    return <div className='px-20 md:px-10 sm:px-2'>
        <Breadcrumbs />
        <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                <div className="flex flex-col md:flex-row -mx-4">
                    {/* Image with slider */}
                    <div className="md:flex-1 px-4">
                        
                    </div>
                    {/* Product information */}
                    <div className="md:flex-1 px-4">
                        <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{product.title}</h2>
                        <p className="text-gray-500 text-sm">By <a href="#" className="text-indigo-600 hover:underline">ABC Company</a></p>

                        <div className="flex items-center space-x-4 my-4">
                            <div>
                                <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                                <span className="text-indigo-400 mr-1 mt-1">$</span>
                                <span className="font-bold text-indigo-600 text-3xl">25</span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="text-green-500 text-xl font-semibold">Save 12%</p>
                                <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                            </div>
                            </div>

                            <p className="text-gray-500">{product.description}</p>

                            <div className="flex py-4 space-x-4">
                            <ProductDetailsFooter id={handle} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    </div>
}