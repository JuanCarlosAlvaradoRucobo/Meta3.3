const db = require('../models/database/db');

db.Activo.create({
    id:1,
    matricula: 201802,
    name: 'sutano',
    semestre: 1,
    creditos: 0
}).then(() => {
    console.log('Activo creado');
}).catch(err => {
    console.log(err);
}).then(() => {
    console.log('Cerrando conexión');
    db.sequelize.close();
});