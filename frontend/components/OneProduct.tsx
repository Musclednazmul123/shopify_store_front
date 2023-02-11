import { useEffect, useState } from 'react'
import {fetchdata} from '../Api/fetch.js'
import { useRouter } from 'next/router'

interface Props{
    id: String
}

export const OneProduct =({id}:Props)=>{
    const [product, setProduct] = useState<any>({})
    const [loading, setLoading]=useState<Boolean>(false)
    const router= useRouter()

    if (!id){
        console.log('id not found')
        return <>400 Bad request</>
    }
    useEffect(()=>{
        setLoading(true)
        fetchdata(`/product/${id}`, {
        limit:1
        }).then((data)=>{
        if(data){
            setProduct(data.body) 
        } else {
            setProduct(null) 
        }
        setLoading(false)
        })
        
    },[id])
    if (loading){
        return <>Loading</>
    }
    // console.log(product)
    if (!product)router.push('/404')
    return <>
    <h2>{product.title}</h2>
    </>
    
    
}