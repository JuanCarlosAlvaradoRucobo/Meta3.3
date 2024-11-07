'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class alumnos_cursos extends Model {
    static associate(models) {
      // Relación con estudiante y curso
      this.belongsTo(models.estudiante, { foreignKey: 'alumnoId', as: 'alumno' });
      this.belongsTo(models.curso, { foreignKey: 'cursoId', as: 'curso' });
    }
  }
  alumnos_cursos.init({
    alumnoId: DataTypes.INTEGER,
    cursoId: DataTypes.INTEGER,
    horario: DataTypes.STRING,
    fechaInscripcion: DataTypes.STRING,
    calificacion: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'alumnos_cursos',
  });
  return alumnos_cursos;
};
