'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('curso', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false
      },
      nombre: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      codigo: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      semestre: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      profesorid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('curso');
  }
};