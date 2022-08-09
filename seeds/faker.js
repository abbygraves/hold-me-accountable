 const faker = require('faker');
const { READUNCOMMITTED } = require('sequelize/types/table-hints');

// user "data"

 const username = faker.internet.userName();

 const password = faker.interent.password();

 const email = faker.internet.email();

 const profile_img = faker.image.animals(200, 200, true);

 // comment "data"

 const comment_text = faker.lorem.paragraph();

 const user_id = faker.datatype.number(1000);

 const post_id = faker.datatype.number(1000);

 // post "data"

 const title = faker.random.words(7);

//not sure if I need this const post_url = 

