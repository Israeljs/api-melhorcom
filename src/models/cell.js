'use strict';
module.exports = (sequelize, DataTypes) => {
  const cell = sequelize.define('cell', {
    code: DataTypes.STRING,
    model: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    brand: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    color: {
      type: DataTypes.ENUM,
      values: ['black', 'white', 'pink', 'gold']
    }
  }, {});
  cell.associate = function(models) {
    // associations can be defined here
  };
  return cell;
};