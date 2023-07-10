const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  const productsWithAllergyOrIntolerance = [];
  const itensProducts = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].allergyOrIntolerance) {    
      let desc = stockProducts[index].description;
      let price = stockProducts[index].price;
      let allergyOrIntolerance2 = stockProducts[index].allergyOrIntolerance.toString().replace(',' , ' ').replace(',' , ' ').replace(',' , ' ')
      let allergyOrIntoleranceMessage = `Pode conter: ${allergyOrIntolerance2}`

      productsWithAllergyOrIntolerance.push(
        {
          description: desc,
          formattedPrice: `R$ ${price}`,
          allergyOrIntoleranceMessage: allergyOrIntoleranceMessage
        }
      )
    } else {
      let desc = stockProducts[index].description;
      let price = stockProducts[index].price;
      productsWithAllergyOrIntolerance.push(
        {
          description: desc,
          formattedPrice: `R$ ${price}`,
        }
      )
    }
  }
  return productsWithAllergyOrIntolerance;
};

module.exports = { getProductsWithAllergyOrIntoleranceInfo };
