interface Logos{
    text?:string,
    source:string
}

export const SiteLogo=({text, source}:Logos)=>{
    return <a href="/" className="flex items-center">
    <img src={source} className=" h-6 sm:h-9" alt="Flowbite Logo" />
    {text && <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{text}</span>}
    
</a>
}