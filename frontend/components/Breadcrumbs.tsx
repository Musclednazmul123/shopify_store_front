import { useRouter } from "next/router"

export const Breadcrumbs = ()=>{
    const {asPath}= useRouter()
    let routes = asPath.split("/")
    routes = routes.filter((str) => str !== '');

    return <div>
        {/* Breadcrumbs */}
        <div className="max-w-7xl py-5">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <a href="/" className="hover:underline hover:text-gray-600">Home</a>
            {routes.map((value, index)=><div key={`${value}-${index}`} className="flex gap-2" >
                <span>
                    <svg className="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </span>
                <a href={`/${value}`} className="hover:underline hover:text-gray-600">{value}</a>
            </div>)}
          </div>
        </div>
         {/* End Breadcrumbs  */}
    </div>
}