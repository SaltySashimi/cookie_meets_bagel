const mysql = require('mysql');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('snorlax', 'root', 'gulpfiction', { dialect: 'mysql' });

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports = sequelize;


// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: "",
//   database: 'snorlax'
// })
//
// connection.connect((err) => {
//   if (err) {
//     console.log('Connection to db failed!');
//     console.error(err);
//     return;
//   }
//   console.log('Connection to db established!');
//   connection.query('USE snorlax');
// });
//
// module.exports = connection;
