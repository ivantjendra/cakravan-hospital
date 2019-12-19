'use strict';
const hashPassword = require('../helpers/hashPassword.js')

module.exports = (sequelize, DataTypes) => {
  const Op = sequelize.Sequelize.Op
  const Model = sequelize.Sequelize.Model
  class Doctor extends Model {}
  Doctor.init ({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate : {
        isEmail : {
          args: true,
          msg: 'Please enter a valid email'
        }, 
        isUnique() {
          return Teacher.findOne({ 
            where: {
              [Op.and]: [{email: this.email}, {id: {[Op.ne]: this.id}}]
            } 
          })
            .then(found => {
              if(found) {
                throw new Error('Email has been used to register')
              }
            })
        }
      }
    },
    password: DataTypes.STRING,
    specialist: DataTypes.STRING,
  }, {
    sequelize,
    hooks: {
      beforeCreate: (doctor, options) => {
        doctor.password = hashPassword(doctor.password)
      }
    }
  });
  Doctor.associate = function(models) {
    // associations can be defined here
    Doctor.belongsToMany(models.Patient, {through: 'DoctorPatient'})
  };
  return Doctor;
};