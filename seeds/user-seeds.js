const {faker} = require('@faker-js/faker');
const {User} = require('../models');


const userData = [];

function createRandomUser() {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    profile_img: faker.image.imageUrl()
  }
};

Array.from({ length: 15 }).forEach(() => {
  userData.push(createRandomUser());
});


const seedUsers = () =>  User.bulkCreate(userData, {individualHooks: true});


module.exports = seedUsers;