const cursos = require("../models/cursosModel");
const estudiantes = require("../models/estudiantesModel");

const profesores = [
    {
        id: 1,
        nombre: "Profesor Juan",
        email: "juan@example.com",
        cursos: [101, 102] // IDs de los cursos que imparte
    },
    {
        id: 2,
        nombre: "Profesor Ana",
        email: "ana@example.com",
        cursos: [103]
    }
];

// Funciones del modelo
const findAll = () => profesores;

const findById = (id) => profesores.find(p => p.id === id);

const createProfesor = (profesor) => {
    if (!findById(profesor.id)) {
        profesores.push(profesor);
        return profesor; // Devuelve el nuevo profesor
    }
    return null; // Devuelve null si el ID ya existe
};

const updateProfesor = (id, data) => {
    const index = profesores.findIndex(p => p.id === id);
    if (index !== -1) {
        profesores[index] = { ...profesores[index], ...data }; // Actualiza el profesor
        return profesores[index];
    }
    return null; // Devuelve null si no se encontró
};

const deleteProfesor = (id) => {
    const index = profesores.findIndex(p => p.id === id);
    if (index !== -1) {
        return profesores.splice(index, 1)[0]; // Devuelve el profesor eliminado
    }
    return null; // Devuelve null si no se encontró
};

// Obtener todos los cursos de un profesor
const obtenerCursosDeProfesor = (profesorId) => {
    const profesor = findById(profesorId);
    if (!profesor) throw new Error(`Profesor con id ${profesorId} no encontrado`);
    return profesor.cursos.map(cursoId => cursos.findById(cursoId));
};

// Obtener todos los estudiantes de un profesor
const obtenerEstudiantesDeProfesor = (profesorId) => {
    const profesor = findById(profesorId);
    if (!profesor) throw new Error(`Profesor con id ${profesorId} no encontrado`);
    
    const estudiantesDeProfesor = [];
    for (const cursoId of profesor.cursos) {
        const est = estudiantes.obtenerEstudiantesDeCurso(cursoId);
        estudiantesDeProfesor.push(...est);
    }
    return estudiantesDeProfesor;
};

exports.findAll = findAll;
exports.findById = findById;
exports.createProfesor = createProfesor;
exports.updateProfesor = updateProfesor;
exports.deleteProfesor = deleteProfesor;
exports.obtenerCursosDeProfesor = obtenerCursosDeProfesor;
exports.obtenerEstudiantesDeProfesor = obtenerEstudiantesDeProfesor;
