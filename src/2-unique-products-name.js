const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  const productsName = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    productsName.push(stockProducts[index].productName);
  }
  return productsName;
};

module.exports = { getUniqueProductsName };
