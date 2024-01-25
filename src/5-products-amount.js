const stockProducts = require('./data.json');

// const getProductsAmount = () => {
//   let sumAmountProducts = 0;
//   for (let index = 0; index < stockProducts.length; index += 1) {
//     sumAmountProducts += stockProducts[index].quantityInStock;
//   }
//   return sumAmountProducts;
// };

const getProductsAmount = () => stockProducts
  .map(({ quantityInStock }) => quantityInStock)
  .reduce((sum, value) => sum + value, 0);

// console.log(getProductsAmount());

module.exports = { getProductsAmount };
