import {OneProduct} from '@/components/OneProduct'
import { Header } from '@/components/Header'
import { useRouter } from 'next/router'


export default function Product() {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Header title={`Product Title`} />
      <OneProduct id={`${id}`} />
    </>
  )
}


