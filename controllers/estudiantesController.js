const estudiantesModel = require("../models/estudiantesModel");

exports.getEstudiantes = (req, res) => {
    res.json(estudiantesModel.findAll());
};

exports.getEstudiante = (req, res) => {
    const estudiante = estudiantesModel.findById(parseInt(req.params.id));
    if (estudiante) {
        res.json(estudiante);
    } else {
        res.status(404).send("Estudiante no encontrado");
    }
};

exports.createEstudiante = (req, res) => {
    const nuevoEstudiante = estudiantesModel.createEstudiante(req.body);
    res.status(201).json(nuevoEstudiante);
};

exports.updateEstudiante = (req, res) => {
    const estudianteActualizado = estudiantesModel.updateEstudiante(parseInt(req.params.id), req.body);
    if (estudianteActualizado) {
        res.json(estudianteActualizado);
    } else {
        res.status(404).send("Estudiante no encontrado");
    }
};

exports.deleteEstudiante = (req, res) => {
    const estudianteEliminado = estudiantesModel.deleteEstudiante(parseInt(req.params.id));
    if (estudianteEliminado) {
        res.json(estudianteEliminado);
    } else {
        res.status(404).send("Estudiante no encontrado");
    }
};

// Rutas adicionales
exports.inscribir = (req, res) => {
    try {
        const { idEstudiante, idCurso } = req.params;
        const cursosActualizados = estudiantesModel.inscribirEstudianteEnCurso(parseInt(idEstudiante), parseInt(idCurso));
        res.json(cursosActualizados);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

exports.eliminarDeCurso = (req, res) => {
    try {
        const { idEstudiante, idCurso } = req.params;
        const result = estudiantesModel.eliminarEstudianteDeCurso(parseInt(idEstudiante), parseInt(idCurso));
        if (result) {
            res.sendStatus(204); // No content
        } else {
            res.status(404).send("Curso no encontrado");
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
};

exports.cursosDeEstudiante = (req, res) => {
    try {
        const cursos = estudiantesModel.obtenerCursosDeEstudiante(parseInt(req.params.id));
        res.json(cursos);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

exports.profesoresDeEstudiante = (req, res) => {
    try {
        const profesores = estudiantesModel.obtenerProfesoresDeEstudiante(parseInt(req.params.id));
        res.json(profesores);
    } catch (error) {
        res.status(404).send(error.message);
    }
};
