// cypress/support/generateData.js
const faker = require('faker');

function generateRandomUser() {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    username: faker.internet.userName(),
    password: faker.internet.password(),
  };
}

module.exports = { generateRandomUser };