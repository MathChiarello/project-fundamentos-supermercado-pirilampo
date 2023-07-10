const stockProducts = require('./data.json');

const searchProductsByBrand = (brandName) => {
  const productsBrand = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].brand === brandName) {
      let desc = stockProducts[index].description;
      let price = stockProducts[index].price;
      productsBrand.push(
        {
          description: desc,
          formattedPrice: `R$ ${price}`,
        },
      );
    }
  }
  return productsBrand;
};

module.exports = { searchProductsByBrand };
