const {useAppQuery} = require('../config/storeApi.js')
const {allProduct} = require('../config/storefrontApiQuery.js')

const all_prodict=(req, res)=>useAppQuery(allProduct).then((data)=>{
    console.log(data)
    res.send(data)
}).catch((err)=>{
    console.log(err)
    res.send(err)
})

module.exports = {all_prodict}