const express = require('express');
const router = express.Router();
const maestrosController = require('../controllers/maestrosController');

// Rutas de profesores
router.get("/profesores", maestrosController.getProfesores);
router.get("/profesores/:id", maestrosController.getProfesor);
router.post("/profesores", maestrosController.createProfesor);
router.put("/profesores/:id", maestrosController.updateProfesor);
router.delete("/profesores/:id", maestrosController.deleteProfesor);
router.get("/profesores/:id/cursos", maestrosController.cursosDeProfesor);
router.get("/profesores/:id/estudiantes", maestrosController.estudiantesDeProfesor);

module.exports = router;
