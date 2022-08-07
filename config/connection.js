const Sequelize = require('sequelize');
require('dotenv').config();

// connect to the DB specified in the .env file. 
// change to process.env.JAWSDB after connecting jawsDB in Heroku
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});


module.exports = sequelize;