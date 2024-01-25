const stockProducts = require('./data.json');

// const getOutOfStockProducts = () => {
//   const productsOutOfStock = [];
//   for (let index = 0; index < stockProducts.length; index += 1) {
//     if (stockProducts[index].quantityInStock === 0) {
//       productsOutOfStock.push(stockProducts[index].productName);
//     }
//   }
//   return productsOutOfStock;
// };

const getOutOfStockProducts = () => stockProducts
  .filter(({ quantityInStock }) => quantityInStock === 0)
  .map(({ productName }) => productName);

// console.log(getOutOfStockProducts());

module.exports = { getOutOfStockProducts };
