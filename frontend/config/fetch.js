import axios from "axios";
import { NEXT_PUBLIC_STORE_API } from '../env.vars.js'

const baseurl = NEXT_PUBLIC_STORE_API

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