const allProduct = (queryOption)=>{
  
  return `{
    products (${queryOption}) {
      edges {
        cursor
        node {
          id
          title
          handle
        }
      }
      pageInfo{
        hasNextPage
        hasPreviousPage
      }
    }
  }`
}

const oneProduct = (handle, queryOption)=>{

  return `{
    product(handle:${handle}) {
      id
      title
      variants(first: 250) {
        nodes {
          id
          price {
            amount
            currencyCode
          }
        }
      }
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