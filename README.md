# api-melhorcom
api para gerenciar o cadastro de novos celulares.

npx sequelize-cli model:generate --name cell --attributes model:STRING,price:DECIMAL,brand:STRING,startDate:DATEONLY,endDate:DATEONLY,color:ENUM


'use strict';
module.exports = (sequelize, DataTypes) => {
  const cell = sequelize.define('cell', {
    id: DataTypes.INTEGER,
    code: DataTypes.STRING,
    model: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    brand: DataTypes.STRING,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY,
    color: {
      type: DataTypes.ENUM,
      values: ['black', 'white', 'pink', 'gold']
    }

  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'cell'
  });
  cell.associate = function(models) {
    // associations can be defined here
  };
  return cell;
};




'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cell', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false,
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
        type: Sequelize.DATEONLY
      },
      endDate: {
        type: Sequelize.DATEONLY
      },
      color: {
        type: Sequelize.ENUM,
        values: ['black', 'white', 'gold', 'pink']
      }
    },{
      timestamps: false,
      freezeTableName: true,
      tableName: 'cell'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cell');
  }
};