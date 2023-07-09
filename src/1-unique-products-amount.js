const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => {
  return stockProducts.length;
};

console.log(getUniqueProductsAmount());

module.exports = { getUniqueProductsAmount };
