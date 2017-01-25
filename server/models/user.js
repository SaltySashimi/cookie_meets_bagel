module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    username: { type: DataTypes.STRING },
    firstname: { type: DataTypes.STRING },
    lastname: { type: DataTypes.STRING },
    dob: { type: DataTypes.DATE },
    sex: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true, validate: { isEmail: true } }

  }, {

    classMethods: {
      associate: (models) => {
        User.hasMany(models.Image, {
          foreignKey: 'userId',
          as: 'images',
        });
      },
    },

    instanceMethods: {
      userFunction: function() {
        // how to implement this method ?
      }
    }

  });
  return User;
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
