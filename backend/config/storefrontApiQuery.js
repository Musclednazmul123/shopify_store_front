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


module.exports = {allProduct}