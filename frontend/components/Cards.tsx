import { CardPrice } from "./Prices"
import Image from "next/image"
import Link from "next/link"
import {IconCardType} from "../types"
import { Button } from "./Button"

interface Product{
    product:any 
}

export const ProductCard=({product}:Product)=>{

    return <div key={product?.node?.id} className="group relative bg-gray-100 pb-[5px] rounded-[30px] overflow-hidden">
    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
      <Image src={`${product?.node?.images?.edges[0]?.node?.transformedSrc ? product?.node?.images?.edges[0]?.node?.transformedSrc : "/placeholder.webp"}`} alt="Front of men&#039;s Basic Tee in black." width={1080} height={1920} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
    </div>
    <div className="flex m-[15px] flex-col items-center gap-[20px] py-[35px] px-[15px] rounded-[30px] bg-white">
        <h3 className="text-md">
          <Link href={`products/${product?.node?.handle ? product?.node?.handle: "#"}`}>
            {product?.node?.title ? product?.node?.title :""}
          </Link>
        </h3>
        {product?.node?.description && <div className="mt-1 text-sm text-white">{product?.node?.description}</div>}
      <CardPrice classes="" amount={product?.node?.variants?.nodes[0]?.price?.amount ? product?.node?.variants?.nodes[0]?.price?.amount :""} currency={product?.node?.variants?.nodes[0]?.price?.currencyCode ? product?.node?.variants?.nodes[0]?.price?.currencyCode:""} />
      <div className="flex justify-center items-center gap-5">
        <Button classes=" rounded-[23px] bg-yellow-500 px-[20px] py-[10px]">Add to cart</Button>
        <Button classes=" rounded-[23px] border-2 border-yellow-500 px-[20px] py-[10px]">Explore</Button>
      </div>
    </div>
  </div>
}


export const ProductCardGreen=({product}:Product)=>{

  return <div key={product?.node?.id} className="group relative bg-gray-100 pb-[5px] rounded-[30px] overflow-hidden">
  <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
    <Image src={`${product?.node?.images?.edges[0]?.node?.transformedSrc ? product?.node?.images?.edges[0]?.node?.transformedSrc : "/placeholder.webp"}`} alt="Front of men&#039;s Basic Tee in black." width={1080} height={1920} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
  </div>
  <div className="flex m-[15px] flex-col items-center gap-[20px] py-[35px] px-[15px] rounded-[30px] bg-green-900">
      <h3 className="text-sm text-white">
        <Link href={`products/${product?.node?.handle ? product?.node?.handle: "#"}`}>
          {product?.node?.title ? product?.node?.title :""}
        </Link>
      </h3>
      {product?.node?.description && <div className="mt-1 text-sm text-white">{product?.node?.description}</div>}
    <CardPrice classes="text-white" amount={product?.node?.variants?.nodes[0]?.price?.amount ? product?.node?.variants?.nodes[0]?.price?.amount :""} currency={product?.node?.variants?.nodes[0]?.price?.currencyCode ? product?.node?.variants?.nodes[0]?.price?.currencyCode:""} />
    <div className="flex justify-center items-center gap-5">
      <Button classes="text-white rounded-[23px] bg-yellow-500 px-[20px] py-[10px]">Add to cart</Button>
      <Button classes="text-white rounded-[23px] border-2 border-yellow-500 px-[20px] py-[10px]">Explore</Button>
    </div>
  </div>
</div>
}



export const IconCard =({iconsrc, title, description, scheme, titleTop}:IconCardType)=>{

    return(<div>

        {scheme=="red" ? 
        <div className="py-5 px-10 flex flex-col gap-5 justify-center items-center rounded-2xl bg-gradient-to-r from-orange-600 to-yellow-300 shadow-xl">
            {titleTop && <h3 className="text-center text-white ">{title}</h3>}
            <div className="w-21 h-21">
                {iconsrc ? <Image src={String(iconsrc)} alt={String(title)} width={1920} height={1080} /> : <Image src="/placeholder.webp" alt={String(title)} width={1920} height={1080} />}
            </div>
            {!titleTop && <h3 className="text-center text-white ">{title}</h3>}
            <p className="text-center text-white">{description}</p>
        </div>
        : scheme=="blue" ?
        <div className="py-5 px-10 flex flex-col gap-5 justify-center items-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-300 shadow-lg">
            {titleTop && <h3 className="text-center text-white ">{title}</h3>}
            <div className="">
                {iconsrc ? <Image src={String(iconsrc)} alt={String(title)} width={1920} height={1080} /> : <Image src="/placeholder.webp" alt={String(title)} width={1920} height={1080} />}
            </div>
            {!titleTop && <h3 className="text-center text-white ">{title}</h3>}
            <p className="text-center text-white">{description}</p>
        </div>
        : scheme=="pink" ?
        <div className="py-5 px-10 flex flex-col gap-5 justify-center items-center rounded-2xl bg-gradient-to-r from-pink-300 to-pink-200 shadow-lg">
            {titleTop && <h3 className="text-center text-white ">{title}</h3>}
            <div className="">
                {iconsrc ? <Image src={String(iconsrc)} alt={String(title)} width={1920} height={1080} /> : <Image src="/placeholder.webp" alt={String(title)} width={1920} height={1080} />}
            </div>
            {!titleTop && <h3 className="text-center text-white ">{title}</h3>}
            <p className="text-center text-white">{description}</p>
        </div>
        :
            <div className="py-5 px-10 flex flex-col gap-5 justify-center items-center">
              {titleTop && <h3 className="text-center text-white ">{title}</h3>}
                <div className="">
                    {iconsrc ? <Image src={String(iconsrc)} alt={String(title)} width={1920} height={1080} /> : <Image src="/placeholder.webp" alt={String(title)} width={1920} height={1080} />}
                </div>
                {!titleTop && <h3 className="text-center text-white ">{title}</h3>}
                <p className="text-center text-white">{description}</p>
            </div>
        }
    </div>)
}