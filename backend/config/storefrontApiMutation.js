const addCart =(items)=>{
    return `mutation {
        cartCreate(input:${items}) {
          cart {
            id
            createdAt
            updatedAt
            lines(first: 10) {
              edges {
                node {
                  id
                  merchandise {
                    ... on ProductVariant {
                      id
                    }
                  }
                }
              }
            }
            
            attributes {
              key
              value
            }
            # The estimated total cost of all merchandise that the customer will pay at checkout.
            cost {
              totalAmount {
                amount
                currencyCode
              }
              # The estimated amount, before taxes and discounts, for the customer to pay at checkout.
              subtotalAmount {
                amount
                currencyCode
              }
              # The estimated tax amount for the customer to pay at checkout.
              totalTaxAmount {
                amount
                currencyCode
              }
              # The estimated duty amount for the customer to pay at checkout.
              totalDutyAmount {
                amount
                currencyCode
              }
            }
          }
        }
      }`
      
}


module.exports = {addCart}