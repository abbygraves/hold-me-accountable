const {faker} = require('@faker-js/faker');
const {Post} = require('../models');


const postData = [];

function createRandomPost() {
  return {
    title: faker.random.words(5),
    post_id: faker.datatype.number({ min: 1, max: 10}),
    user_id: faker.datatype.number({ min: 1, max: 10})
  }
};

Array.from({ length: 10 }).forEach(() => {
  postData.push(createRandomPost());
});


const seedPosts = () =>  Post.bulkCreate(postData);


module.exports = seedPosts;