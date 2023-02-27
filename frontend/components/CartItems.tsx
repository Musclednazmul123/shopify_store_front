import { useGetShopifyQuery } from "@/slice/shopifySlice"
import Link from "next/link"
import { Key, useEffect, useState } from "react"
import { Error } from "./Error"
import { Loading } from "./Loadings"
import { CardPrice } from "./Prices"

interface CartItems{
    id:string | null
    node?:{
        id:string | null
        quantity: string | null
        merchandise?: {
            id: string | null
            title: string | null
            product:{
                title: string | null
            }
        }
        cost:{
            amountPerQuantity:{
                amount:number
                currencyCode:string
            }
            totalAmount:{
                amount:number
                currencyCode:string
            }
        }
    }
    
}
export const CartItems =({id}:CartItems)=>{
    const [page, setPage]=useState<string | null>(null)

    const {data, error, isLoading} = useGetShopifyQuery(`/cart?id=${id}&page=${page}`)

    if(isLoading){
        return <Loading />
    }
    if (error || data.error){
        return <Error />
    }
    let items = data.response.cart

    console.log(items)

    if(!items){
        return <>Cart is Empty</>
    }

    let updatedAt = new Date(items.updatedAt)
    return <div>

        <div className="container mx-auto mt-10">
            <div className="flex shadow-md my-10">
            <div className="w-3/4 bg-white px-10 py-10">
                
                <div className="flex justify-between border-b pb-8">
                    <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                    <h2 className="font-semibold text-2xl">{items.totalQuantity} Items</h2>
                </div>
                <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
                </div>

                {items.lines.edges.map((item:CartItems)=><div key={item?.node?.id}>
                        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                        <div className="flex w-2/5">
                            <div className="w-20">
                            <img className="h-24" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z" alt="" />
                            </div>
                            <div className="flex flex-col justify-between ml-4 flex-grow">
                            <span className="font-bold text-sm">{item.node?.merchandise?.product.title}</span>
                            <span className="text-red-500 text-xs">Variant: {item.node?.merchandise?.title}</span>
                            <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                            </div>
                        </div>
                        <div className="flex justify-center w-1/5">
                            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                            </svg>

                            <input className="mx-2 border text-center w-8" type="text" value={item?.node?.quantity || 1} />

                            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                            </svg>
                        </div>
                        <span className="text-center w-1/5 font-semibold text-sm"><CardPrice money amount={item?.node?.cost.amountPerQuantity.amount} currency={item?.node?.cost.amountPerQuantity.currencyCode} /></span>
                        <span className="text-center w-1/5 font-semibold text-sm"><CardPrice money amount={item?.node?.cost.totalAmount.amount} currency={item?.node?.cost.totalAmount.currencyCode}  /></span>
                        </div>
                    </div>
                )}

                <Link href="/" className="flex font-semibold text-indigo-600 text-sm mt-10">
            
                <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
                Continue Shopping
                </Link>
            </div>

            <div id="summary" className="w-1/4 px-8 py-10">
                <h1 className="font-semibold text-2xl ">Order Summary</h1>
                <p className="text-sm border-b pb-8 py-2">Update: {updatedAt.toDateString()} </p>
                <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">Items: {items.totalQuantity}</span>
                <span className="font-semibold text-sm"><CardPrice amount={items.cost.subtotalAmount.amount} currency={items.cost.subtotalAmount.currencyCode} money /></span>
                </div>
                <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                <select className="block p-2 text-gray-600 w-full text-sm">
                    <option>Standard shipping - $10.00</option>
                </select>
                </div>
                <div className="py-10">
                <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                </div>
                <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total cost</span>
                    <span><CardPrice money amount={items.cost.totalAmount.amount} currency={items.cost.totalAmount.currencyCode} /></span>
                </div>
                <Link href={items.checkoutUrl}>
                    <button  className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                </Link>
                </div>
            </div>

            </div>
        </div>
    </div>
}