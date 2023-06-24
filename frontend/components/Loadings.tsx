import { LoadingIcon } from "./Icons"

interface Loader{
    small?:boolean
}
export const Loading=({small}:Loader)=>{
    return (
    <div className={`text-center ${small ? "": "py-10"}`}>
        <div role="status">
            <LoadingIcon />
            <span className="sr-only">Loading...</span>
        </div>
    </div>
)}