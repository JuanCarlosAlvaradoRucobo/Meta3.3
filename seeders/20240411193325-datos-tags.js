'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Tags', [
      {
        tag: 'Mueble',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tag: 'Computadora',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tag: 'Dispositivo de medicion',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {});
  }
};
