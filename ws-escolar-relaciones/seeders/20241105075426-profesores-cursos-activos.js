'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('profesores_cursos', [
      {
        profesorId: 1,  // Este ID debe existir en la tabla maestro
        cursoId: 102,
        horarioMaestro: "10:00 - 12:00",
        codigoCurso: "FIS102",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        profesorId: 2,  // Este ID también debe existir en la tabla maestro
        cursoId: 101,
        horarioMaestro: "12:00 - 14:00",
        codigoCurso: "MAT101",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },    

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('profesores_cursos', null, {});
  }
};
