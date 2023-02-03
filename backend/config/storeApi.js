const {shopifyApi} = require('@shopify/shopify-api');
require('@shopify/shopify-api/adapters/node')


// Use client.query and pass your query as `data`
async function useAppQuery(query){
    // Load the access token
    console.log(query)
    const storefrontAccessToken = process.env.API_ACCESS_TOKEN || undefined;
    // Shop from which we're fetching data
    const shop = process.env.SHOP || undefined;

    const API_KEY = process.env.API_KEY || undefined
    const API_SECRET_KEY = process.env.API_SECRET_KEY || undefined
    const SCOPES = process.env.SCOPES 
    const HOST_NAME = process.env.HOST_NAME

    // console.log(shopifyApi)
    // return
    if (!storefrontAccessToken || !shop || !API_KEY || !API_SECRET_KEY || !SCOPES || !HOST_NAME){
        const error = {ok:false, message:"Storefront Access Token or Shop is undefined"}
        return error
    }
    try{
        const shopify = shopifyApi({
            apiKey: API_KEY,
            apiSecretKey: API_SECRET_KEY,
            scopes: SCOPES,
            hostName: HOST_NAME,
        });

        const storefrontClient = new shopify.clients.Storefront({
            domain: shop,
            storefrontAccessToken,
        });
        const data = await storefrontClient.query({
            data: query,
          });
        return data.body.data
    } catch (error){
        return error
    }
}

module.exports = {useAppQuery}