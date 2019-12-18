'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Patient extends Model {

  }

  Patient.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    pasword: DataTypes.STRING
  }, {
    sequelize
  })

  Patient.associate = function(models) {
    // associations can be defined here
  };
  return Patient;
};