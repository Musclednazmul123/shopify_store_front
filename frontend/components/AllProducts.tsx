import {fetchdata} from '../config/fetch.js'
import { useEffect, useState } from 'react'
import { Button } from './Button'
import { useRouter } from 'next/router'
import {Error} from './Error'


export default function AllProducts(){
    const [products, setProducts] = useState<any>({})
    const [cursor, setCursor] = useState<String | null>(null)
    const [paginate, setPaginate] = useState<String | null>(null)
    const [loading, setLoading]=useState<Boolean>(false)
    const router= useRouter()

    useEffect(()=>{
        setLoading(true)
        fetchdata('/product', {
        cursor:cursor,
        page:paginate,
        }).then((data)=>{
            if(data){
                setProducts(data.products) 
            } else {
                setProducts(null) 
            }
        setLoading(false)
        })
        
    },[cursor])

    if (loading){
       return <> Loading...</>
    } 


    if (!products){
        return <Error />
    }

    const nextPage =()=>{
        if (products.pageInfo.hasNextPage){
            setCursor(products.edges[products.edges.length - 1].cursor)
            setPaginate('after')
        }
    }

    const previousPage =()=>{
        if (products.pageInfo.hasPreviousPage){
            setCursor(products.edges[0].cursor)
            setPaginate('before')
        }
    }
    console.log(products)
    return <>
    {products.edges && products.edges.length>0 ? products.edges.map((product:any, index:Number)=>
    <div key={product.node.id}>
        
        <h3>{product.node.title}</h3>
        <p>{product.node.id}</p>
        <p>{product.node.handle}</p>
        
    </div>):"No product to show"}
    <Button title='Previous' action={()=>previousPage()} />
    <Button title='Next' action={()=>nextPage()} />
    </>
}
    