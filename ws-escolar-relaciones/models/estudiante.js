'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class estudiante extends Model {
    static associate(models) {
      // Relación muchos a muchos entre estudiante y curso
      this.belongsToMany(models.curso, {
        through: models.alumnos_cursos,
        foreignKey: 'alumnoId',
        otherKey: 'cursoId',
        as: 'cursos'
      });
    }
  }
  estudiante.init({
    id: { type: DataTypes.INTEGER, allowNull: false, unique: true },
    nombre: { type: DataTypes.STRING, allowNull: false, unique: true },
    semestre: { type: DataTypes.INTEGER, allowNull: false, unique: true },
    creditosCursados: { type: DataTypes.INTEGER, allowNull: false, unique: true },
    cursos: { type: DataTypes.INTEGER, allowNull: false, unique: true }
  }, {
    sequelize,
    modelName: 'estudiante',
  });
  return estudiante;
};
