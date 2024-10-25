const express = require('express');
const router = express.Router();
const cursosController = require('../controllers/cursosController');  // Asegúrate de que esta ruta sea correcta

router.use(express.json());
// Rutas de cursos
router.get("/cursos", cursosController.getCursos);
router.get("/cursos/:id", cursosController.getCurso);
router.post("/cursos", cursosController.createCurso);
router.put("/cursos/:id", cursosController.updateCurso);
router.delete("/cursos/:id", cursosController.deleteCurso);
router.post("/cursos/:cursoId/profesores/:profesorId", cursosController.asignarProfesor);
router.delete("/cursos/:cursoId/profesores", cursosController.eliminarProfesor);
router.get("/cursos/:id/estudiantes", cursosController.estudiantesDeCurso);

module.exports = router;