const express = require('express');
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const sequelize = require('sequelize');
const app = express();

//cargar los certificados de ssl/tls
const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

//crear el servidor https
const server = https.createServer(options, app);	

//habilitar cors
app.use(cors());                

//define las rutas
app.get('/estudiantes', (req, res) => {
    res.send('Hola estudiantes');
});

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
