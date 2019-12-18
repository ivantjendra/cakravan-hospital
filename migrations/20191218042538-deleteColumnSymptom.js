'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Patients', 'symptom');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Patients', 'symptom', Sequelize.STRING);
  }
};
