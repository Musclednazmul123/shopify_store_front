import axios from "axios";

const baseurl = "https://31cf-103-129-208-37.in.ngrok.io"

export const fetchdata = async(url, query)=>{
    const type = typeof(query)
    if (type != 'object') {
        return {message:"query must be a object"}
    }
    try {
        const data = await axios.post(`${baseurl}${url}`, query)
        console.log(data)
        if (data){
            return data.data
        } else {
            return data
        }
        
    } catch(error) {
        console.log('error ocured')
        return error
    };
}