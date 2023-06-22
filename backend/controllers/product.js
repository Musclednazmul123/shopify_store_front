const { useAppQuery } = require('../config/storeApi');
const { allProduct, oneProduct } = require('../graphql/storefrontApiQuery');

const handlePaginationOption = (page) => {
  let limit = 'first';
  if (page !== 'null' && page.split(':')[0] === 'before') {
    limit = 'last';
  }
  return limit;
};

const all_product = async (req, res) => {
  let status = 200;
  let error = null;
  let data = null;

  try {
    const paginationOption = handlePaginationOption(req.query.page);
    let queryOption = `${paginationOption}: 20, reverse: true, ${
      req.query.page !== 'null' ? req.query.page : ''
    }`;
    queryOption += `, query: "NOT product_type:'gift_card'"`;

    data = await useAppQuery(allProduct(queryOption));
  } catch (e) {
    console.log(`Failed to process products/detall: ${e.message}`);
    status = 500;
    error = e.message;
  }

  return res.status(status).send({ success: status === 200, response: data, error });
};

const one_product = async (req, res) => {
  let status = 200;
  let error = null;
  let data = null;
  const handle = `"${req.params.handle}"`;

  try {
    const paginationOption = handlePaginationOption(req.query.page);
    let queryOption = `${paginationOption}: 20, reverse: true, ${
      req.query.page !== 'null' ? req.query.page : ''
    }`;

    data = await useAppQuery(oneProduct(handle, queryOption));
  } catch (e) {
    console.log(`Failed to process products/create: ${e.message}`);
    status = 500;
    error = e.message;
  }

  return res.status(status).send({ success: status === 200, response: data, error });
};

module.exports = { all_product, one_product };
