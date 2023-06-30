import { BurgerButton } from './Button'
import { IconCart } from './Icons'
import { SiteLogo } from './Logos'
import { Menus } from './Menus'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {ExtraMenus} from "./ExtraMenus"


export const Header =()=>{
    const [cartId, setCartId] = useState<string | null>(null)

    useEffect(() => {
        setCartId(localStorage.getItem('cart')?.replace("gid://shopify/Cart/","") || null)
    }, [])
    
    return <div>
        <header>
            <nav className="bg-gray-200 border-gray-200 px-0 py-2.5 ">
                <div className="flex items-center justify-between mx-auto max-w-screen-xl px-4 w-full">
                    <Menus />
                    <div className="flex items-center justify-center w-1/3">
                        <SiteLogo source='https://cdn.shopify.com/s/files/1/0707/5302/6343/files/logo_3a67bf5a-b8d1-4b4c-8ce6-52010659c268.png?v=1687426827' />
                    </div>
                    <div className="flex justify-end w-1/3">
                        <Link href="/cart">
                        <IconCart id={cartId} /> 
                        </Link>
                        <BurgerButton />
                    </div>
                </div>
            </nav>
            <div className='flex justify-center gap-5 w-full bg-teal-800 '>
                <ExtraMenus />
            </div>
        </header>
        
    </div>
}