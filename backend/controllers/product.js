const {useAppQuery} = require('../config/storeApi.js')
const {allProduct, oneProduct} = require('../config/storefrontApiQuery.js')

const all_product=(req, res)=>{

    if (!req.body.limit){
        return res.status(404).send({message:"limit is not define in request body"}) 
    }
    
    useAppQuery(allProduct(req.body.limit || 10, req.body.cursor || null, req.body.page || null )).then((data)=>{
        if(data.products){
            return res.send({ok:true, body:data.products})
        } else{
            return res.status(404).send({message:"404 Not found"})
        }
        
    }).catch((err)=>{
        console.log(err)
        return res.send(err)
    })
}

const one_product=(req, res)=>{

    if (!req.body.limit){
        return res.status(404).send({message:"limit is not define in request body"}) 
    }
    
    useAppQuery(oneProduct(req.params.id)).then((data)=>{
        
        if(data.product){
            
            return res.send({ok:true, body:data.product})
        } else{
            console.log(data)
            return res.status(404).send({message:"404 Not found"})
        }
        
    }).catch((err)=>{
        return res.status(5000).send({message:"Internal server error"})
    })
}

module.exports = {all_product, one_product}