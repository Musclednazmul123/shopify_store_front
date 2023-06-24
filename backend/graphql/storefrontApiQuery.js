const allProduct = (queryOption)=>{
  
  return `{
    products (${queryOption}) {
      edges {
        cursor
        node {
          id
          title
          handle
          variants(first: 1) {
            nodes {
              price {
                amount
                currencyCode
              }
            }
          }
          images(first: 1) {
            edges {
              node {
                transformedSrc(preferredContentType: WEBP)
              }
            }
          }
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
      images(first: 10) {
        edges {
          node {
            transformedSrc(preferredContentType: WEBP)
          }
        }
      }
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

const cart = (id, queryOption)=>{
  return `{
    cart(id:${id} ) {
      id
      createdAt
      updatedAt
      checkoutUrl
      totalQuantity
      cost{
        totalAmount {
          amount
          currencyCode
        }
        subtotalAmount {
          amount
          currencyCode
        }
        totalTaxAmount {
          amount
          currencyCode
        }
        totalDutyAmount {
          amount
          currencyCode
        }
      }
      lines(${queryOption}) {
        edges {
          cursor
          node {
            id
            cost{
              amountPerQuantity{
                amount
                currencyCode
              }
              totalAmount{
                amount
                currencyCode
              }
            }
            merchandise {
              ... on ProductVariant {
                id
                title
                product{
                  title
                }
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