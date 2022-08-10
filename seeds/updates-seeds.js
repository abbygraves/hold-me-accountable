const {faker} = require('@faker-js/faker');
const {Updates} = require('../models');


const updatesData = [];

function createRandomUpdates() {
  return {
    updates_text: faker.random.words(5),
    user_id: faker.datatype.number({ min: 1, max: 10}),
    post_id: faker.datatype.number({ min: 1, max: 10})
  }
};

Array.from({ length: 10 }).forEach(() => {
  updatesData.push(createRandomUpdates());
});


const seedUpdates = () =>  Updates.bulkCreate(updatesData);


module.exports = seedUpdates;