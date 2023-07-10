const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  const productsWithAllergyOrIntolerance = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].allergyOrIntolerance) {
      let allergyMessage = `Pode conter: ${stockProducts[index].allergyOrIntolerance.toString()
        .replace(',', ' ').replace(',', ' ').replace(',', ' ')}`;
      productsWithAllergyOrIntolerance.push(
        {
          description: stockProducts[index].description,
          formattedPrice: `R$ ${stockProducts[index].price}`,
          allergyOrIntoleranceMessage: allergyMessage,
        },
      );
    } else {
      productsWithAllergyOrIntolerance.push(
        {
          description: stockProducts[index].description,
          formattedPrice: `R$ ${stockProducts[index].price}`,
        },
      );
    }
  }
  return productsWithAllergyOrIntolerance;
};

console.log(getProductsWithAllergyOrIntoleranceInfo());

module.exports = { getProductsWithAllergyOrIntoleranceInfo };
