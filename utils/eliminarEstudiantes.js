const db = require('../models/database/db');

db.Activo.destroy({
    where: {
        id: 21808
    }
}).
then(res => {
    console.log('Registros borrados', res);
}).
catch(err => {
    console.log(err);
}).
then(() => {
    console.log('Cerrando conexión');
    db.sequelize.close();
});
