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

 const title = faker.random.words(4);


// updates "data"

const updates_text = faker.lorem.paragraph();

// JSON

// JSON for post "data"

const jsonUser = JSON.stringify({
  username,
  password,
  email,
  profile_img,
});

const jsonComment = JSON.stringify({
    comment_text,
    user_id,
    post_id,
});

const jsonPost = JSON.stringify({
    title,
    user_id,
});

const jsonUpdate = JSON.stringify({
    title,
    updates_text,
    user_id,
    post_id,
});