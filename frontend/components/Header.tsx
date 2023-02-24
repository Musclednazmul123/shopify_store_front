import { BurgerButton } from './Button'
import { IconCart } from './Icons'
import { SiteLogo } from './Logos'
import { Menus } from './Menus'


export const Header =()=>{
    return <div>
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <SiteLogo source='https://flowbite.com/docs/images/logo.svg' />
                    <div className="flex items-center lg:order-2">
                        <IconCart />
                        <BurgerButton />
                    </div>
                    <Menus />
                </div>
            </nav>
        </header>
        
    </div>
}