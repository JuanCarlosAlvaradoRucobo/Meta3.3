const profesoresModel = require("../models/maestrosModel");

exports.getProfesores = (req, res) => {
    res.json(profesoresModel.findAll());
};

exports.getProfesor = (req, res) => {
    const profesor = profesoresModel.findById(parseInt(req.params.id));
    if (profesor) {
        res.json(profesor);
    } else {
        res.status(404).send("Profesor no encontrado");
    }
};

exports.createProfesor = (req, res) => {
    const nuevoProfesor = profesoresModel.createProfesor(req.body);
    res.status(201).json(nuevoProfesor);
};

exports.updateProfesor = (req, res) => {
    const profesorActualizado = profesoresModel.updateProfesor(parseInt(req.params.id), req.body);
    if (profesorActualizado) {
        res.json(profesorActualizado);
    } else {
        res.status(404).send("Profesor no encontrado");
    }
};

exports.deleteProfesor = (req, res) => {
    const profesorEliminado = profesoresModel.deleteProfesor(parseInt(req.params.id));
    if (profesorEliminado) {
        res.json(profesorEliminado);
    } else {
        res.status(404).send("Profesor no encontrado");
    }
};

// Rutas adicionales
exports.cursosDeProfesor = (req, res) => {
    try {
        const cursos = profesoresModel.obtenerCursosDeProfesor(parseInt(req.params.id));
        res.json(cursos);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

exports.estudiantesDeProfesor = (req, res) => {
    try {
        const estudiantes = profesoresModel.obtenerEstudiantesDeProfesor(parseInt(req.params.id));
        res.json(estudiantes);
    } catch (error) {
        res.status(404).send(error.message);
    }
};
