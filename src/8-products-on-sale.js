const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  const productsOnSale = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].onSale === true) {    
      let desc = stockProducts[index].description;
      let price = stockProducts[index].price;
      productsOnSale.push(
        {
          description: desc,
          formattedPrice: `R$ ${price}`,
          onSale: true
        }
      )
    }
  }
  return productsOnSale;
};

module.exports = { getProductsOnSale };
