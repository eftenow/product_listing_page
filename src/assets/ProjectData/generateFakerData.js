const faker = require('faker');

const categories = ['shoes', 't-shirts', 'bags'];
const uses = ['formal', 'casual', 'sport'];

const products = Array.from({length: 120}, () => {
  const category = faker.random.arrayElement(categories);
  const use = faker.random.arrayElement(uses);

  return {
    img: faker.image.fashion(),
    title: faker.commerce.productName(),
    rating: parseFloat(faker.finance.amount(0, 5, 2)),
    prevPrice: parseFloat(faker.commerce.price()),
    newPrice: parseFloat(faker.commerce.price()),
    brand: faker.company.companyName(),
    color: faker.commerce.color(),
    category,
    audience: faker.random.arrayElement(['men', 'women']),
    use,
  }
});

console.log(products);
