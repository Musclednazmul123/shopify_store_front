const {useAppQuery} = require('../config/storeApi.js')
const {allProduct} = require('../config/storefrontApiQuery.js')

const all_prodict=(req, res)=>useAppQuery(allProduct(2, "eyJsYXN0X2lkIjo4MDQ0NzcxNTA4NTMzLCJsYXN0X3ZhbHVlIjo4MDQ0NzcxNTA4NTMzfQ==", "next" )).then((data)=>{
    console.log(data)
    res.send(data)
}).catch((err)=>{
    console.log(err)
    res.send(err)
})

module.exports = {all_prodict}