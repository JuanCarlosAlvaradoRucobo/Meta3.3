const cursosModel = require("../models/cursosModel");

exports.getCursos = (req, res) => {
    res.json(cursosModel.findAll());
};

exports.getCurso = (req, res) => {
    const curso = cursosModel.findById(parseInt(req.params.id));
    if (curso) {
        res.json(curso);
    } else {
        res.status(404).send("Curso no encontrado");
    }
};

exports.createCurso = (req, res) => {
    const nuevoCurso = cursosModel.createCurso(req.body);
    res.status(201).json(nuevoCurso);
};

exports.updateCurso = (req, res) => {
    const cursoActualizado = cursosModel.updateCurso(parseInt(req.params.id), req.body);
    if (cursoActualizado) {
        res.json(cursoActualizado);
    } else {
        res.status(404).send("Curso no encontrado");
    }
};

exports.deleteCurso = (req, res) => {
    const cursoEliminado = cursosModel.deleteCurso(parseInt(req.params.id));
    if (cursoEliminado) {
        res.json(cursoEliminado);
    } else {
        res.status(404).send("Curso no encontrado");
    }
};

// Rutas adicionales
exports.asignarProfesor = (req, res) => {
    try {
        const { cursoId, profesorId } = req.params;
        const cursoActualizado = cursosModel.asignarProfesorACurso(parseInt(cursoId), parseInt(profesorId));
        res.json(cursoActualizado);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

exports.eliminarProfesor = (req, res) => {
    try {
        const { cursoId } = req.params;
        const cursoActualizado = cursosModel.eliminarProfesorDeCurso(parseInt(cursoId));
        res.json(cursoActualizado);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

exports.estudiantesDeCurso = (req, res) => {
    try {
        const estudiantes = cursosModel.obtenerEstudiantesDeCurso(parseInt(req.params.id));
        res.json(estudiantes);
    } catch (error) {
        res.status(404).send(error.message);
    }
};
