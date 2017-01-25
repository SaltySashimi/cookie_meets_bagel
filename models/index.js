const Sequelize = require('sequelize');
const mysql = require('mysql');
const fs = require("fs");
const path = require("path");

// var config    = require('config').database;  // we use node-config to handle environments
// var sequelize = new Sequelize(
//   config.name,
//   config.username,
//   config.password,
//   config.options
// );

const sequelize = new Sequelize('snorlax', 'root', '', { dialect: 'mysql' });
sequelize
  .authenticate()
  .then(function() { console.log('Connection has been established successfully.'); })
  .catch(function (err) { console.log('Unable to connect to the database:', err); });

// instantiate models
var models = [
  'User'
];
models.forEach(function(model) {
  console.log(model);
  module.exports[model] = sequelize.import(__dirname + '/' + model);
});

// describe relationships
(function(m) {
  m.Image.belongsTo(m.User);
  // m.Task.belongsTo(m.User);
  // m.User.hasMany(m.Task);
  m.User.hasMany(m.Image);
})(module.exports);

// create tables if needed
sequelize
  .sync({force: true})
  .then(function() {
    console.log('Tables created');
  })
  .catch(function(err) {
    console.log(err);
  })

// export connection
module.exports.sequelize = sequelize;
