'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class curso extends Model {
    static associate(models) {
      // Relación muchos a muchos entre curso y estudiante
      this.belongsToMany(models.estudiante, {
        through: models.alumnos_cursos,
        foreignKey: 'cursoId',
        otherKey: 'alumnoId',
        as: 'estudiantes'
      });
      // Relación muchos a muchos entre curso y maestro
      this.belongsToMany(models.maestro, {
        through: models.profesores_cursos,
        foreignKey: 'cursoId',
        otherKey: 'profesorId',
        as: 'maestros'
      });
    }
  }
  curso.init({
    id: { type: DataTypes.INTEGER, allowNull: false, unique: true },
    nombre: { type: DataTypes.STRING, allowNull: false, unique: true },
    codigo: { type: DataTypes.STRING, allowNull: false, unique: true },
    semestre: { type: DataTypes.INTEGER, allowNull: false, unique: true },
    profesorid: { type: DataTypes.INTEGER, allowNull: false, unique: true }
  }, {
    sequelize,
    modelName: 'curso',
  });
  return curso;
};
