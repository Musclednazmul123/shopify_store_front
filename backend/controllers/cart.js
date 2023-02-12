const {useAppQuery} = require('../config/storeApi.js')
const {addCart, cartAddItemsMutation, cartUpdateItemsMutation, cartRemoveItemsMutation} = require('../config/storefrontApiMutation.js')
const {cart}=require('../config/storefrontApiQuery.js')

const getCart = (req, res)=>{

  const id = "acf59e1343657a41d32109c3c29a672e"
  useAppQuery(cart(id, req.body.limit || 10, req.body.cursor || null, req.body.page || null )).then((data)=>{
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

const addToCart =(req, res)=>{
    
    const input = `{
        lines: [
          {
            quantity: ${req.body.quantity},
            merchandiseId: "gid://shopify/ProductVariant/${req.boy.variant_id}"
          }
        ], 
        attributes: {
          key: "cart_attribute",
          value: "This is a cart attribute"
        }
    }`
    useAppQuery(addCart(input)).then((data)=>{
        if(data.cartCreate.cart){
            return res.send({ok:true, body:data.cartCreate})
        } else{
            return res.status(404).send({message:"404 Not found"})
        }
        
    }).catch((err)=>{
        console.log(err)
        return res.send(err)
    })
}


const cartAddItems=(req, res)=>{
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