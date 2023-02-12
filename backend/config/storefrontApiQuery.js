const allProduct = (total, cursor, page)=>{
  
  let pageoption = ""
  let option='first'
  if (cursor){
    if (page=='next'){
      option='first'
      page = "after"
    } else if(page=='previous'){
      option='last'
      page = "before"
    } else{
      return null
    }
    pageoption =  `${page}:"${cursor}"`
  }

  return `{
    products (${option}: ${total}, ${pageoption}) {
      edges {
        cursor
        node {
          id
          title
        }
      }
      pageInfo{
        hasNextPage
        hasPreviousPage
      }
    }
  }`
}

const oneProduct = (id)=>{
  if (id){
    id = id.replace("gid://shopify/Product/","")
    
  } else{
    return null
  }

  return `{
    product(id: "gid:\/\/shopify\/Product\/${id}") {
      title
    }
  }`
}

const cart = (id, total, cursor, page)=>{
  let pageoption = ""
  let option='first'
  if (cursor){
    if (page=='next'){
      option='first'
      page = "after"
    } else if(page=='previous'){
      option='last'
      page = "before"
    } else{
      return null
    }
    pageoption =  `${page}:"${cursor}"`
  }
  return `{
    cart(id: "gid:\/\/shopify\/Cart\/${id}" ) {
      id
      createdAt
      updatedAt
      lines(${option}: ${total}, ${pageoption}) {
        edges {
          cursor
          node {
            id
            merchandise {
              ... on ProductVariant {
                id
                
              }
            }
            quantity
          }
        }
        pageInfo{
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }`
}

module.exports = {allProduct, oneProduct, cart}