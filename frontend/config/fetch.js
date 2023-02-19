import axios from "axios";

const baseurl = "https://2234-103-129-208-35.in.ngrok.io"

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