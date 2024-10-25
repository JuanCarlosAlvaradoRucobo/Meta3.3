const Sequelize = require('sequelize');
const sequelize = new Sequelize(
   'estudiantes',
   'backenduser',
   'superpassword', 
   {
      host: 'localhost',
      dialect: 'mysql'
   });

   const Activo = sequelize.define('activos',{
    //atributos
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false
    },
    matricula: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    semestre: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    creditos: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
 });
 Activo.sync({ force: true});
 