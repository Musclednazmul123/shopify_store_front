import {MenuItems} from '@/types'

export const MenuItem=({active, text, url}:MenuItems)=>{

    return <li>
        {active?
        <a href={url} className="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white" aria-current="page">{text}</a>:
        <a href={url} className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">{text}</a>
        }
    </li>
}

export const Menus=()=>{
    return <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <MenuItem active={true} text="Home" url="#" />
            <MenuItem active={false} text="Catalog" url="#" />
            <MenuItem active={false} text="About" url="#" />
            <MenuItem active={false} text="Contact" url="#" />
        </ul>
    </div>
}