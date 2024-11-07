'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('profesores_cursos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      profesorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'maestro',
          key: 'id'
        }
      },
      cursoId: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        references: {
          model: 'curso',
          key: 'id'
        }
      },
      horarioMaestro: {
        type: Sequelize.STRING
      },
      codigoCurso: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        references: {
          model: 'curso',
          key: 'codigo'
        }
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
    await queryInterface.dropTable('profesores_cursos');
  }
};