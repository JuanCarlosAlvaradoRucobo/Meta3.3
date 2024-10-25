const db = require('../models/database/db');
const Op = db.Sequelize.Op;
db.Activo.update({
    name : 'Nuevo nombre'
}, {
    where: {
        id: {
            [Op.eq]: 12345
        }
    }
}).then((res) => {
    console.log('Registros actualizados:',res);
}).catch(err => {
    console.log(err);
}).then(() => {
    console.log('Cerrando conexión');
    db.sequelize.close();
});
