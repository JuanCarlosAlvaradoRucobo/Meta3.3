const profesores = require("../models/maestrosModel");

const cursos = [
    {
        id: 101,
        nombre: "Matemáticas",
        codigo: "MAT101",
        semestre: 1,
        profesorId: 1 // ID del profesor que imparte el curso
    },
    {
        id: 102,
        nombre: "Historia",
        codigo: "HIS102",
        semestre: 1,
        profesorId: 1
    },
    {
        id: 103,
        nombre: "Física",
        codigo: "FIS103",
        semestre: 3,
        profesorId: 2
    }
];

// Funciones del modelo
const findAll = () => cursos;

const findById = (id) => cursos.find(curso => curso.id === id);

const createCurso = (data) => {
    const nuevoCurso = { id: cursos.length + 1, ...data }; // Asigna un nuevo ID
    cursos.push(nuevoCurso);
    return nuevoCurso;
};

const updateCurso = (id, data) => {
    const index = cursos.findIndex(curso => curso.id === id);
    if (index !== -1) {
        cursos[index] = { ...cursos[index], ...data }; // Actualiza el curso
        return cursos[index];
    }
    return null; // Retorna null si no se encuentra el curso
};

const deleteCurso = (id) => {
    const index = cursos.findIndex(curso => curso.id === id);
    if (index !== -1) {
        return cursos.splice(index, 1)[0]; // Devuelve el curso eliminado
    }
    return null; // Devuelve null si no se encontró el curso
};

// Asociar un profesor a un curso
const asignarProfesorACurso = (cursoId, profesorId) => {
    const curso = findById(cursoId);
    if (!curso) throw new Error(`Curso con id ${cursoId} no encontrado`);
    curso.profesorId = profesorId; // Asigna el profesor
    return curso;
};

// Eliminar un profesor de un curso
const eliminarProfesorDeCurso = (cursoId) => {
    const curso = findById(cursoId);
    if (!curso) throw new Error(`Curso con id ${cursoId} no encontrado`);
    curso.profesorId = null; // Elimina el profesor asignado
    return curso;
};

// Obtener todos los estudiantes de un curso
const obtenerEstudiantesDeCurso = (cursoId) => {
    const curso = findById(cursoId);
    if (!curso) throw new Error(`Curso con id ${cursoId} no encontrado`);
    return estudiantes.filter(est => est.cursos.includes(cursoId));
};

exports.findAll = findAll;
exports.findById = findById;
exports.createCurso = createCurso;
exports.updateCurso = updateCurso;
exports.deleteCurso = deleteCurso;
exports.asignarProfesorACurso = asignarProfesorACurso;
exports.eliminarProfesorDeCurso = eliminarProfesorDeCurso;
exports.obtenerEstudiantesDeCurso = obtenerEstudiantesDeCurso;
