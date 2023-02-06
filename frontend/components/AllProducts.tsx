import {fetchdata} from '../Api/fetch.js'
import { useEffect, useState } from 'react'
import { Button } from './Button'


export default function AllProducts(){
    const [products, setProducts] = useState<any>({})
    const [cursor, setCursor] = useState<String | null>(null)
    const [paginate, setPaginate] = useState<String | null>(null)
    const [loading, setLoading]=useState<Boolean>(false)

    useEffect(()=>{
        setLoading(true)
        fetchdata('/product', {
        limit:1,
        cursor:cursor,
        page:paginate,
        }).then((data)=>{
        if(data.body){
            setProducts(data.body)
        }
        setLoading(false)
        })
        
    },[cursor])

    if (loading){
       return <> "Loading..."</>
    } else{
        const nextPage =()=>{
            if (products.pageInfo.hasNextPage){
                setCursor(products.edges[products.edges.length - 1].cursor)
                setPaginate('next')
            }
        }

        const previousPage =()=>{
            if (products.pageInfo.hasPreviousPage){
                setCursor(products.edges[0].cursor)
                setPaginate('previous')
            }
        }
        return <>
        {products.edges && products.edges.length>0 ? products.edges.map((product:any, index:Number)=>
        <div key={product.node.id}>
            
            <h3>{product.node.title}</h3>
            
        </div>):"No product to show"}
        <Button title='Previous' action={()=>previousPage()} />
        <Button title='Next' action={()=>nextPage()} />
        </>
    }
    
}