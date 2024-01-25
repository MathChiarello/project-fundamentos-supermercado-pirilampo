const stockProducts = require('./data.json');

// const getLowStockProducts = () => {
//   const productsLowStock = [];
//   for (let index = 0; index < stockProducts.length; index += 1) {
//     if (stockProducts[index].quantityInStock > 0 && stockProducts[index].quantityInStock <= 10) {
//       let product = stockProducts[index].productName;
//       let quantity = stockProducts[index].quantityInStock;
//       productsLowStock.push(`${product}: ${quantity} unidades`);
//     }
//   }
//   return productsLowStock;
// };

const getLowStockProducts = () => stockProducts
  .filter(({ quantityInStock }) => quantityInStock > 0 && quantityInStock <= 10)
  .map(({ productName, quantityInStock }) => `${productName}: ${quantityInStock} unidades`);

// console.log(getLowStockProducts());

module.exports = { getLowStockProducts };
