module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Image', {
    
    url: DataTypes.STRING,
    avatar: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    instanceMethods: {
      countTasks: function() {
        // how to implement this method ?
      }
    }
  });
};
