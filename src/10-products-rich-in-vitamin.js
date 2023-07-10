const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  const productsVitamin = [];
  const top = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].nutritionalInfo.vitamins) {    
      let desc = stockProducts[index].description;
      let price = stockProducts[index].price;
      
      let value = Object.values(stockProducts[index].nutritionalInfo.vitamins);
      let key = Object.keys(stockProducts[index].nutritionalInfo.vitamins);
      //while (top.length) {top.pop();}
      
      for (var index2 = 0; index2 < key.length; index2 += 1) {
        top.push(`${key[index2]} - ${value[index2]}`);
      }

      productsVitamin.push(
        {
          description: desc,
          formattedPrice: `R$ ${price}`,
          vitamins: top
        }
      )
    }
  }
  return productsVitamin;
};

console.log(getProductsRichInVitamin());

module.exports = { getProductsRichInVitamin };
