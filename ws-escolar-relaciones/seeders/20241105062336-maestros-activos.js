'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('maestro', [
      {
        id: 1,
        nombre: "ernesto",
        email: "ernesto@example.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        nombre: "curlango",
        email: "lango@example.com",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('maestro', null, {});
  }
};
