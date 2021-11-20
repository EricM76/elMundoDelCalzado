'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria_Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Categoria_Usuario.hasMany(models.Usuarios, { 
        as: "Usuarios",
        foreignKey: 'id_categoria_usuario',
        
      
    })
      // define association here
    }
  };
  Categoria_Usuarios.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categoria_Usuario',
  });
  return Categoria_Usuario;
};