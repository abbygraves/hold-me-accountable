const {faker} = require('@faker-js/faker');
const {Comment} = require('../models');


const commentData = [];

function createRandomComment() {
  return {
    comment_text: faker.random.words(15),
    user_id: faker.datatype.number({ min: 1, max: 10}),
    post_id: faker.datatype.number({ min: 1, max: 10}),
  }
};

Array.from({ length: 10 }).forEach(() => {
  commentData.push(createRandomComment());
});


const seedComments = () =>  Comment.bulkCreate(commentData);


module.exports = seedComments;