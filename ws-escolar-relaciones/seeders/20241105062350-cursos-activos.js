'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('curso', [
      {
        id: 101,
        nombre: "Matematica",
        Semestre: 1,
        codigo: "MAT101",
        profesorId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 102,
        nombre: "Fisica",
        Semestre: 2,
        codigo: "FIS102",
        profesorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('curso', null, {});
  }
};
