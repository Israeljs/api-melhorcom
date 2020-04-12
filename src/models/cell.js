module.exports = (sequelize, DataTypes) => {
    const cell = sequelize.define('cell', {
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
    }, {});

    return cell;
  };