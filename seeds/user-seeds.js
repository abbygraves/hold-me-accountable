const sequelize = require('../config/connection');
const {User} = require('../models');

const userData = [
    {
        username: 'test1',
        password: 'password',
        email: 'test1@email.com'
    },
    {
        username: 'test2',
        password: 'password',
        email: 'test2@email.com'
    },
    {
        username: 'test3',
        password: 'password',
        email: 'test3@email.com'
    },


];


const seedUsers = () =>  User.bulkCreate(userData, {individualHooks: true})
.then( async () => {
    const users = await User.findAll();
    return console.log(users);
});


module.exports = seedUsers;