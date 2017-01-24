const sequelize = require('../db/sequelize');
const Sequelize = require('sequelize');
// CREATE DATABASE IF NOT EXISTS snorlax;
// USE snorlax;
//
// DROP TABLE IF EXISTS `users`;
// CREATE TABLE `users` (
//   id INT NOT NULL AUTO_INCREMENT,
//   username varchar(20),
//   firstname varchar(20),
//   lastname varchar(20),
//   dob DATE,
//   sex CHAR(1),
//   created_at TIMESTAMP NOT NULL DEFAULT NOW(),
//   updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE now(),
//   PRIMARY KEY(id)
// ) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

const User = sequelize.define('user', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
  username: { type: Sequelize.STRING },
  firstname: { type: Sequelize.STRING },
  lastname: { type: Sequelize.STRING },
  dob: { type: Sequelize.DATE },
  sex: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING, unique: true, validate: { isEmail: true } }
})

sequelize
  .sync({force: true})
  .then(function() {
    console.log('User table created');
  })
  .catch(function(err) {
    console.log(err);
  })

module.exports = {
  User: User
};

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
//
// // define model
// const userSchema = new Schema({
//   email: { type: String, unique: true, lowercase: true },
//   password: String
// })
//
// // create model class
// const ModelClass = mongoose.model('user', userSchema);
//
// // export the model
// module.exports = ModelClass;
