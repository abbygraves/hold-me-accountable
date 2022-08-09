const seedUsers = require('./user-seeds');
const seedUpdates = require('./updates-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds')
const sequelize = require('../config/connection');


const seedAll = async () => {
    await sequelize.sync({force: true});

    console.log('----------seedtext----------');
    await seedUsers();
    console.log('----------users seeded----------');

    await seedPosts();
    console.log('----------posts seeded----------');

    await seedUpdates();
    console.log('----------updates seeded----------');

    await seedComments();
    console.log('----------posts seeded----------');
}

seedAll();