import { Header } from '@/components/Header'
import { useRouter } from 'next/router'


export default function Error() {

  return (
    <>
      <Header title={`404`} />
      <h2>404 Not found</h2>
    </>
  )
}