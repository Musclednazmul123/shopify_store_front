import AllProducts from '@/components/AllProducts'
import { Header } from '@/components/Header'

export default function Home() {
  

  return (
    <>
      <Header title={`Home`} />
      <AllProducts />
    </>
  )
}
