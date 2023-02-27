import { usePostShopifyMutation } from '@/slice/shopifySlice'
import { ProductDetailsType } from '@/types'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { AddToCartButton, LoadingButton } from './Button'
import { IconDropDown } from './Icons'
import {ProductDetailsPrice} from './Prices'


export const ProductDetails=({id, variants, amount, currency, description, title }:ProductDetailsType)=>{

    const [quantity, setQuantity] = useState<String>("1")

    const [postShopify, {isLoading: loading, data, isError, isSuccess}] = usePostShopifyMutation()

    let cartId: string | null = null
    if ((typeof window !== 'undefined')){
        cartId = localStorage.getItem("cart")
    }
    const handleAddToCart = ()=>{
        const body = {
            
            quantity:quantity,
            variant_id:"gid://shopify/ProductVariant/44107811389749"
        }
        postShopify({"url":"/cart/add", body })
       
    }
    

    useEffect(() => {
        if(isSuccess){
            toast.success(`Added to cart: ${title}`)
            localStorage.setItem("cart", data?.cart?.id)
        }
    }, [data?.cart?.updatedAt])
    
    return <>
    <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{title}</h2>
    <p className="text-gray-500 text-sm">By <a href="#" className="text-indigo-600 hover:underline">ABC Company</a></p>
    <div className="flex items-center space-x-4 my-4">
        <div>
        <ProductDetailsPrice amount={amount} currency={currency} />
        </div>
        <div className="flex-1">
        <p className="text-green-500 text-xl font-semibold">Save 12%</p>
        <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
        </div>
    </div>

    <p className="text-gray-500">{description}</p>
    <div className="flex py-4 space-x-4">              
        <div className="relative">
            <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">Qty</div>
            <select onChange={(e)=>setQuantity(e.target.value)} className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                {[...Array(10).keys()].map((value)=>
                    <option key={`${value}-${value}`} value={value+1}>{value+1}</option>
                )}
            </select>

            <IconDropDown action={()=>alert("increase qty")} />
        </div>
    </div>

    {loading? <LoadingButton />:<AddToCartButton action={()=>handleAddToCart()} />}
    
</>
}