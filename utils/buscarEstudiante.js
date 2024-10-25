const db = require('../models/database/db');
db.Activo.findAll().
then((res) => {
    res.forEach( rec => {
      console.log(
          rec.id,
          rec.matricula,
          rec.name,
          rec.semestre,
          rec.creditos
    );})
    db.sequelize.close();
});
