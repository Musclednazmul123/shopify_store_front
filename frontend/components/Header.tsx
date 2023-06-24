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
            <nav className="bg-gray-200 border-gray-200 px-4 lg:px-6 py-2.5 ">
                <div className="flex items-center justify-between mx-auto max-w-full w-full">
                    <Menus />
                    <div className="flex items-center justify-center w-1/3">
                        <SiteLogo source='https://flowbite.com/docs/images/logo.svg' />
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