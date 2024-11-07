'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('alumnos_cursos', [
      {
        alumnoId: 1234,      // Elimina el campo 'id' si es auto-incremental
        cursoId: 102,
        horario: "10:00 - 12:00",
        fechaInscripcion: "2021-01-01",
        calificacion: 100.0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        alumnoId: 5678,      // Elimina el campo 'id' si es auto-incremental
        cursoId: 101,
        horario: "12:00 - 14:00",
        fechaInscripcion: "2022-10-10",
        calificacion: 95.0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('alumnos_cursos', null, {});
  }
};
