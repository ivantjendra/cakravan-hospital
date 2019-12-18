'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class DoctorPatient extends Model {

  }

  DoctorPatient.init({
    DoctorId: DataTypes.INTEGER,
    PatientId: DataTypes.INTEGER,
    review: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    symptom: DataTypes.STRING
  },
  {
    sequelize
  })
  DoctorPatient.associate = function(models) {
    // associations can be defined here
  };
  return DoctorPatient;
};