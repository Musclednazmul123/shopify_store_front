import {MenuItems} from '@/types'
import { useRouter } from 'next/router';

export const ExtraMenuItem=({active, text, url}:MenuItems)=>{

    return <li>
        {active?
        <a href={url} className="block py-5 px-2 rounded text-yellow-500 lg:bg-transparent lg:p-5 " aria-current="page">{text}</a>:
        <a href={url} className="block py-5 px-2 border-white   lg:hover:text-yellow-500 dark:text-white">{text}</a>
        }
    </li>
}



export const ExtraMenus = () => {
  const router = useRouter();

  const menuItems = [
    { text: 'Vape Kits', url: '#' },
    { text: 'E-Liquid', url: '#' },
    { text: 'Disposables', url: '#' },
    { text: 'Tanks', url: '#' },
    { text: 'Mods', url: '#' },
    { text: 'Coils', url: '#' },
    { text: 'Batteries', url: '#' },
    { text: 'Accessories', url: '#' },
    { text: 'IQOS', url: '#' },
    { text: 'Brands', url: '#' },
    { text: 'New In', url: '#' },
  ];

  return (
    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto" id="mobile-menu-2">
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
