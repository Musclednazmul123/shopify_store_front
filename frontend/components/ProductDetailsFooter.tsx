import { useState } from 'react'
import {fetchdata} from '../config/fetch.js'
import { AddToCartButton, LoadingButton } from './Button'
import { IconDropDown } from './Icons'

interface Props{
    id: String
}
export const ProductDetailsFooter=({id}:Props)=>{
    const [quantity, setQuantity] = useState<String>("1")
    const [loading, setLoading]=useState<Boolean>(false)
    const handleAddToCart = ()=>{
        return alert("ad to cart success")
        // add to cart api requires variant id and the quantity
        setLoading(true)
        fetchdata(`/product/cart/add`, {
        variantid:`${id}`,
        quantity: quantity,
        }).then((data)=>{
        if(data){
            // set cart id to local storage
            
        } else {
            
        }
        setLoading(false)
        })
    }
    return <>
    <div className="relative">
        <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">Qty</div>
        <select onChange={(e)=>setQuantity(e.target.value)} className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
            {[...Array(10).keys()].map((value)=>
                <option key={`${value}-${value}`} value={value+1}>{value+1}</option>
            )}
        </select>

        <IconDropDown action={()=>alert("increase qty")} />
    </div>

    {loading? <LoadingButton />:<AddToCartButton action={()=>handleAddToCart()} />}
    
</>
}