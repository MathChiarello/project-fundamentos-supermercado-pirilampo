const stockProducts = require('./data.json');

const getProductsAmount = () => {
  let sumAmountProducts = 0;
  for (let index = 0; index < stockProducts.length; index += 1) {
    sumAmountProducts += stockProducts[index].quantityInStock;
  }
  return sumAmountProducts;
};

module.exports = { getProductsAmount };
