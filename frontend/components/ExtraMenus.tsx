import {MenuItems} from '@/types'
import { useRouter } from 'next/router';
import {extra_menus} from '../data/menus'
import Link from 'next/link';

export const ExtraMenuItem=({active, text, url}:MenuItems)=>{

    return <li className='p-0'>
        {active?
        <Link href={url} className="block py-5 px-2 rounded text-yellow-500 lg:bg-transparent" aria-current="page">{text}</Link>:
        <Link href={url} className="block py-5 px-2 border-white   lg:hover:text-yellow-500 dark:text-white">{text}</Link>
        }
    </li>
}



export const ExtraMenus = () => {
  const router = useRouter();

  const menuItems = extra_menus

  return (
    <div className="hidden justify-between items-center max-w-screen-xl px-2 w-full lg:flex lg:w-auto" id="mobile-menu-2">
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        {menuItems.map((item) => (
          <ExtraMenuItem
            key={item.text}
            active={router.pathname === item.url}
            text={item.text}
            url={item.url}
          />
        ))}
      </ul>
    </div>
  );
};
