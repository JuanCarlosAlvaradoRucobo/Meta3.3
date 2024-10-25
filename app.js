const express = require('express');
const sequelize = require('sequelize');
const app = express();

app.use(express.json());

// Importar rutas
const estudiantesRoutes = require('./routes/estudiantes');
const cursosRoutes = require('./routes/cursos');
const profesoresRoutes = require('./routes/maestros');

// Usar rutas
app.use('/', estudiantesRoutes);
app.use('/', cursosRoutes);
app.use('/', profesoresRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
