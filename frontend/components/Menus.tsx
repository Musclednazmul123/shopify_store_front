import {MenuItems} from '@/types'
import { useRouter } from 'next/router';

export const MenuItem=({active, text, url}:MenuItems)=>{

    return <li>
        {active?
         <a href={url} className="block py-5 px-2 rounded text-yellow-500 lg:bg-transparent lg:p-5 " aria-current="page">{text}</a>:
         <a href={url} className="block py-5 px-2  lg:hover:text-yellow-500 text-gray-800">{text}</a>
        }
    </li>
}



export const Menus = () => {
  const router = useRouter();

  const menuItems = [
    { text: 'Home', url: '/' },
    { text: 'Shop', url: '/shop' },
    { text: 'Contact', url: '/contact' },
    { text: 'About Us', url: '/about' },
  ];

  const isActive = (url: string) => {
    return router.pathname === url;
  };

  return (
    <div className="hidden justify-between items-center w-1/3 lg:flex" id="mobile-menu-2">
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        {menuItems.map((menuItem, index) => (
          <MenuItem key={index} active={isActive(menuItem.url)} text={menuItem.text} url={menuItem.url} />
        ))}
      </ul>
    </div>
  );
};
