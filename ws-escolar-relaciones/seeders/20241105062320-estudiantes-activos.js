'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('estudiantes', [
      {
        id: 1234,
        nombre: "Fulano",
        semestre: 6,
        creditosCursados: 200,
        cursos: [102],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5678,
        nombre: "Sutano",
        semestre: 4,
        creditosCursados: 100,
        cursos: [101],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('estudiantes', null, {});
  }
};

