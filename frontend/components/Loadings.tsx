import { LoadingIcon } from "./Icons"

export const Loading=()=>{
    return (
    <div className="text-center py-10">
        <div role="status">
            <LoadingIcon />
            <span className="sr-only">Loading...</span>
        </div>
    </div>
)}