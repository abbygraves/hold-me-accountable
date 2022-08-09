const {faker} = require('@faker-js/faker');
const {User} = require('../models');


const userData = [];

function createRandomUser() {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    email: faker.internet.email()
  }
};

Array.from({ length: 10 }).forEach(() => {
  userData.push(createRandomUser());
});


const seedUsers = () =>  User.bulkCreate(userData, {individualHooks: true});


module.exports = seedUsers;