const stockProducts = require('./data.json');

// const getUniqueProductsName = () => {
//   const productsName = [];
//   for (let index = 0; index < stockProducts.length; index += 1) {
//     productsName.push(stockProducts[index].productName);
//   }
//   return productsName;
// };

const getUniqueProductsName = () => stockProducts.map(({ productName }) => productName);

// console.log(getUniqueProductsName());

module.exports = { getUniqueProductsName };
