'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cell', {
      code: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      model: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      brand: {
        type: Sequelize.STRING
      },
      startDate: {
        type: Sequelize.DATE
      },
      endDate: {
        type: Sequelize.DATE
      },
      color: {
        type: Sequelize.ENUM,
        values: ['black', 'white', 'pink', 'gold']
      }
    },{
      charset: 'utf8mb4',
      timestamps: false,
      dialectOptions: {
        collate: 'utf8mb4_general_ci',
        useUTC: false,
        timezone: 'Etc/GMT0'
      },
      timezone: 'Etc/GMT0'
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cell');
  }
};