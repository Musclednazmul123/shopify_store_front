const addCart =(items)=>{
    return `mutation {
        cartCreate(input:${items}) {
          cart {
            id
            createdAt
            updatedAt
            checkoutUrl
          }
          userErrors {
            field
            message
          }
        }
      }`
      
}


const cartUpdateItemsMutation =(id, lines)=>{
  return `mutation {
    cartLinesUpdate(cartId: "gid:\/\/shopify\/Cart\/${id}", lines: ${lines}) {
      cart {
        id
        createdAt
        updatedAt
        checkoutUrl
        
      }
      userErrors {
        field
        message
      }
    }
  }`
}


const cartAddItemsMutation = (lines)=>{
  return `mutation {
    cartLinesAdd(${lines}) {
      cart {
        id
        createdAt
        updatedAt
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }`
}

const cartRemoveItemsMutation=(id, lineIds)=>{

  return `mutation {
    cartLinesRemove(cartId: "gid:\/\/shopify\/Cart\/${id}", lineIds: ${lineIds}) {
      cart {
        id
        createdAt
        updatedAt
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }`
}

module.exports = {addCart, cartAddItemsMutation, cartUpdateItemsMutation, cartRemoveItemsMutation}