const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController');

router.use(express.json());
router.get("/estudiantes", estudiantesController.getEstudiantes);
router.get("/estudiantes/:id", estudiantesController.getEstudiante);
router.post("/estudiantes", estudiantesController.createEstudiante);
router.put("/estudiantes/:id", estudiantesController.updateEstudiante);
router.delete("/estudiantes/:id", estudiantesController.deleteEstudiante);
router.post("/estudiantes/:idEstudiante/cursos/:idCurso", estudiantesController.inscribir);
router.delete("/estudiantes/:idEstudiante/cursos/:idCurso", estudiantesController.eliminarDeCurso);
router.get("/estudiantes/:id/cursos", estudiantesController.cursosDeEstudiante);
router.get("/estudiantes/:id/profesores", estudiantesController.profesoresDeEstudiante);

module.exports = router;