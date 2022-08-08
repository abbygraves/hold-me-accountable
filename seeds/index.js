const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');
const { User } = require('../models');

const seed = async () => {
    await sequelize.sync({force: true});
    console.log('---------seedtext---------');
    await seedUsers();
}

seed();