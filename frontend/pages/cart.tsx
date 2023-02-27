import { CartItems } from "@/components/CartItems";
import Layout from "@/components/Layout";
import { useGetShopifyQuery } from "@/slice/shopifySlice";
import { useEffect, useState } from "react";


export default function Cart(){

  const [id, setId] = useState<string | null>(null)

  useEffect(() => {
    setId(localStorage.getItem('cart')?.replace("gid://shopify/Cart/","") || null)
  }, [])
  
  return <Layout title='Cart'>
    {id && <CartItems id={id} />}
    
  </Layout>
}