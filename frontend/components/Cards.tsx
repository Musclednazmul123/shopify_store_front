import { CardPrice } from "./Prices"

interface Product{
    product:any 
}

export const ProductCard=({product}:Product)=>{

    return <div key={product?.node?.id} className="group relative">
    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
      <img src={`${product?.node?.images?.edges[0]?.node?.transformedSrc ? product?.node?.images?.edges[0]?.node?.transformedSrc : "/placeholder.webp"}`} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
    </div>
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-gray-700">
          <a href={`products/${product?.node?.handle ? product?.node?.handle: "#"}`}>
            <span aria-hidden="true" className="absolute inset-0"></span>
            {product?.node?.title ? product?.node?.title :""}
          </a>
        </h3>
        <p className="mt-1 text-sm text-gray-500">Black</p>
      </div>
      <CardPrice amount={product?.node?.variants?.nodes[0]?.price?.amount ? product?.node?.variants?.nodes[0]?.price?.amount :""} currency={product?.node?.variants?.nodes[0]?.price?.currencyCode ? product?.node?.variants?.nodes[0]?.price?.currencyCode:""} />
    </div>
  </div>
}