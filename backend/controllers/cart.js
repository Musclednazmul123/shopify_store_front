const {useAppQuery} = require('../config/storeApi.js')
const {addCart, cartAddItemsMutation, cartUpdateItemsMutation, cartRemoveItemsMutation} = require('../graphql/storefrontApiMutation.js')
const {cart}=require('../graphql/storefrontApiQuery.js')

const getCart = async(req, res)=>{
  let status = 200;
  let error = null;
  let data=null
  const id = `"gid://shopify/Cart/${req.query.id}"`
  
  try {
    let limit = "first"
    if(req.query.page !='null' && req.query.page.split(':')[0] == 'before'){
        limit = "last"
    }
    let queryOption=`${limit}:20, reverse: true, ${req.query.page !='null' ? req.query.page :""}`
    data = await useAppQuery(cart(id, queryOption))
    
  } catch(e){
    console.log(`Failed to process products/create: ${e.message}`);
    status = 500;
    error = e.message;
  }

  return res.status(status).send({ success: status === 200, response: data, error });
}

const addToCart = async(req, res)=>{
  let status = 200;
  let error = null;
  let data=null
  const id = req.body.id || null
  try{
    
    const input = `{
      lines: [
        {
          quantity: ${req.body.quantity*1 || 1},
          merchandiseId: "${req.body.variant_id}"
        }
      ]
    }`
    if(id && id != 'null'){
      const mycart = await useAppQuery(cart(`"${id}"`, "first:1"))
      if(mycart.cart){
        const lines = `
          cartId:"${id}",
          lines: [
            {
              quantity: ${req.body.quantity*1 || 1},
              merchandiseId: "${req.body.variant_id}"
            }
          ]`
        data = await useAppQuery(cartAddItemsMutation(lines))
        
      } else{
        data = await useAppQuery(addCart(input))
      }
    } else{
      data = await useAppQuery(addCart(input))
    }
    
    
  }catch(e){
    console.log(`Failed to process products/create: ${e.message}`);
    status = 500;
    error = e.message;
  }
  console.log(req.body.quantity)
  console.log(data)
  return res.status(status).send({ success: status === 200, response: data, error });
}


const cartAddItems=(req, res)=>{
  console.log(req.body.cart_id)
  const id = "acf59e1343657a41d32109c3c29a672e"
  const lines = `[
      {
        merchandiseId: "gid:\/\/shopify\/ProductVariant\/44107811389749",
        quantity: 1,
      }
    ]`

  useAppQuery(cartAddItemsMutation(id, lines)).then((data)=>{
    if(data){
        return res.send({ok:true, body:data})
    } else{
        return res.status(404).send({message:"404 Not found"})
    }
  }).catch((err)=>{
      console.log(err)
      return res.send(err)
  })
}

const cartUpdateItems=(req, res)=>{
  const id = "acf59e1343657a41d32109c3c29a672e"
  const lines = `[
      {
        id: "gid:\/\/shopify\/CartLine\/7cce32f1-02ba-4137-82da-ae51aafdb1f7?cart=${id}",
        merchandiseId: "gid:\/\/shopify\/ProductVariant\/44107811389749",
        quantity: 9,
      }
    ]`

  useAppQuery(cartUpdateItemsMutation(id, lines)).then((data)=>{
    if(data){
        return res.send({ok:true, body:data})
    } else{
        return res.status(404).send({message:"404 Not found"})
    }
  }).catch((err)=>{
      console.log(err)
      return res.send(err)
  })
}

const cartRemoveItems=(req, res)=>{
  const id = "acf59e1343657a41d32109c3c29a672e"
  const lineIds = `[
    "gid:\/\/shopify\/CartLine\/3ab870e8-3d60-48c9-a214-7ddf8abefa1d?cart=${id}"
  ]`
  useAppQuery(cartRemoveItemsMutation(id, lineIds)).then((data)=>{
    if(data){
        return res.send({ok:true, body:data})
    } else{
        return res.status(404).send({message:"404 Not found"})
    }
  }).catch((err)=>{
      console.log(err)
      return res.send(err)
  })
}
module.exports = {addToCart, getCart, cartAddItems, cartUpdateItems, cartRemoveItems}