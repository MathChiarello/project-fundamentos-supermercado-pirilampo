const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  const arrayProducts = [];
  function vitaminsArray(object) {
    let arrayVitamins = [];
    for (let index = 0; index < Object.entries(object).length; index += 1) {
      arrayVitamins.push(`${Object.entries(object)[index][0]} - ${Object.entries(object)[index][1]}`);
    } return arrayVitamins;
  }
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].nutritionalInfo.vitamins) {
      arrayProducts.push(
        {
          description: stockProducts[index].description,
          formattedPrice: `R$ ${stockProducts[index].price}`,
          vitaminsInformation: vitaminsArray(stockProducts[index].nutritionalInfo.vitamins),
        },
      );
    }
  } return arrayProducts;
};

module.exports = { getProductsRichInVitamin };
