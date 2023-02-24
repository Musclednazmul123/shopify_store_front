import axios from "axios";

const baseurl = process.env.NEXT_PUBLIC_STORE_API || "localhost:5000"

export const fetchdata = async(url, query)=>{
    const type = typeof(query)
    if (type != 'object') {
        return {message:"query must be a object"}
    }
    try {
        const data = await axios.post(`${baseurl}${url}`, query)
        if (data){
            // console.log(data)
            return data.data.response
        } else {
            return data
        }
        
    } catch(error) {
        console.log('error ocured')
        return error
    };
}