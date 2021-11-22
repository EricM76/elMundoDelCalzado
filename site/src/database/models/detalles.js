'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Detalles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Detalles.init({
    nombre: DataTypes.STRING,
    id_productos: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Detalles',
  });
  return Detalles;
};