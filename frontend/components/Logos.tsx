import Image from "next/image"
import Link from "next/link"

interface Logos{
    text?:string,
    source:string
}

export const SiteLogo=({text, source}:Logos)=>{
    return <Link href="/" className="flex items-center">
    <Image src={source} className=" h-6 sm:h-9" width={1080} height={1920} alt="Flowbite Logo" />
    {text && <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{text}</span>}
    
</Link>
}