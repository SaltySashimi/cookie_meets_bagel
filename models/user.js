module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {

    id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    username: { type: Sequelize.STRING },
    firstname: { type: Sequelize.STRING },
    lastname: { type: Sequelize.STRING },
    dob: { type: Sequelize.DATE },
    sex: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING, unique: true, validate: { isEmail: true } }

  }, {
    instanceMethods: {
      userFunction: function() {
        // how to implement this method ?
      }
    }
  });
};


// const sequelize = require('../db/sequelize');
// const Sequelize = require('sequelize');
//
// const User = sequelize.define('user', {
//   id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
//   username: { type: Sequelize.STRING },
//   firstname: { type: Sequelize.STRING },
//   lastname: { type: Sequelize.STRING },
//   dob: { type: Sequelize.DATE },
//   sex: { type: Sequelize.STRING },
//   email: { type: Sequelize.STRING, unique: true, validate: { isEmail: true } }
// })
//
// sequelize
//   .sync({force: true})
//   .then(function() {
//     console.log('Tables created');
//   })
//   .catch(function(err) {
//     console.log(err);
//   })
//
// module.exports = {
//   User: User
// };




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
