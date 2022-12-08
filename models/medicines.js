'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medicines extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Medicines.init({
    price: DataTypes.STRING,
    quantity: DataTypes.STRING,
    code: DataTypes.STRING,
    merk: DataTypes.STRING,
    type: DataTypes.STRING,
    expired: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Medicines',
  });
  return Medicines;
};