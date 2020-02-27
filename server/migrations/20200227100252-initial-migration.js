'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('modelName', {

    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('modelName')
  }
};
