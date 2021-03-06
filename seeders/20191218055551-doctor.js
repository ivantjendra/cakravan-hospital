'use strict';
const fs = require('fs');
const data = fs.readFileSync('./doctorFixedHash.csv','utf8').split('\n');

let finalData = [];
for (let i = 0; i < data.length; i++) {
  if(data[i] !== ''){
    let input = data[i].split(',')
    let obj= {
      name        : input[0],
      username    : input[1],
      email       : input[2],
      password    : input[3],
      specialist  : input[4]
    }
    finalData.push(obj);
  }
}

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Doctors',finalData, {})
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Doctors',finalData, {})
  }
};
