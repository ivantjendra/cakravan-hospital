'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Doctor extends Model {}
  Doctor.init ({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    specialist: DataTypes.STRING,
  }, {sequelize});
  Doctor.associate = function(models) {
    // associations can be defined here
  };
  return Doctor;
};