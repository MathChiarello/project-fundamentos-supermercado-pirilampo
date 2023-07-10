const stockProducts = require('./data.json');

const searchProductByName = (product) => {
  let prd;
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].productName === product) {
      prd = index;
    }
  }
  if (prd === undefined) {
    return null;
  }
  let desc = stockProducts[prd].description;
  let price = stockProducts[prd].price;
  return {
    description: desc,
    formattedPrice: `R$ ${price}`,
  };
};

module.exports = { searchProductByName };
