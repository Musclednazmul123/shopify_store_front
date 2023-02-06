const {useAppQuery} = require('../config/storeApi.js')
const {allProduct} = require('../config/storefrontApiQuery.js')

const all_prodict=(req, res)=>{

    if (!req.body.limit){
        return res.status(404).send({message:"limit is not define in request body"}) 
    }
    
    useAppQuery(allProduct(req.body.limit, req.body.cursor || null, req.body.page || null )).then((data)=>{
        return res.send({body:data.products})
    }).catch((err)=>{
        console.log(err)
        return res.send(err)
    })
}


module.exports = {all_prodict}