import axios from "axios";

const baseurl = "https://a2d4-119-30-38-236.ap.ngrok.io"

export const fetchdata = async(url, query)=>{
    const type = typeof(query)
    if (type != 'object') {
        return {message:"query must be a object"}
    }
    try {
        const data = await axios.post(`${baseurl}${url}`, query)
        return data.data
    } catch(error) {
        console.log(error);
        console.log('error ocured')
        return error
    };
}