'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class maestro extends Model {
    static associate(models) {
      // Relación muchos a muchos entre maestro y curso
      this.belongsToMany(models.curso, {
        through: models.profesores_cursos,
        foreignKey: 'profesorId',
        otherKey: 'cursoId',
        as: 'cursos'
      });
    }
  }
  maestro.init({
    id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      unique: true, 
      primaryKey: true // Definir id como clave primaria
    },
    nombre: { 
      type: DataTypes.STRING, 
      allowNull: false, 
      unique: true 
    },
    email: { 
      type: DataTypes.STRING, 
      allowNull: false, 
      unique: true 
    }
    // Elimina el campo 'cursos' de aquí
  }, {
    sequelize,
    modelName: 'maestro',
  });
  return maestro;
};
