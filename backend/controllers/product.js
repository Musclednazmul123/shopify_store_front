const {useAppQuery} = require('../config/storeApi.js')
const {allProduct, oneProduct} = require('../config/storefrontApiQuery.js')

const all_product= async(req, res)=>{

    let status = 200;
    let error = null;
    let data=null

    console.log(req)
    try {
        let limit = "first"
        if(req.body.page == 'before'){
        limit = "last"
        } 
        let queryOption=`${limit}:2,${req.body.page}:"${req.body.cursor}", reverse: true,`
        queryOption=queryOption.replace('undefined:"undefined",', "")
        queryOption=queryOption.replace('null:"null",', "")
        
        data = await useAppQuery(allProduct(queryOption));
        
    } catch (e) {
        console.log(`Failed to process products/create: ${e.message}`);
        status = 500;
        error = e.message;
    }
    return res.status(status).send({ success: status === 200, response: data, error });
}

const one_product= async(req, res)=>{
    let status = 200;
    let error = null;
    let data=null
    let handle = `"${req.params.handle}"`

    try {
        let limit = "first"
        if(req.body.page == 'before'){
        limit = "last"
        } 
        let queryOption=`${limit}:20,${req.body.page}:"${req.body.cursor}", reverse: true,`
        queryOption=queryOption.replace('undefined:"undefined",', "")
        queryOption=queryOption.replace('null:"null",', "")
        
        data = await useAppQuery(oneProduct(handle, queryOption));
        
    } catch (e) {
        console.log(`Failed to process products/create: ${e.message}`);
        status = 500;
        error = e.message;
    }
    return res.status(status).send({ success: status === 200, response: data, error });
}

module.exports = {all_product, one_product}