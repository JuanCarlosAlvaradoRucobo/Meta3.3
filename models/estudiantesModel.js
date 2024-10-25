const cursos = require("./cursosModel");
const profesores = require("./maestrosModel");

const estudiantes = [
    {
        id: 1,
        nombre: "Sutano",
        matricula: 201802,
        semestre: 1,
        creditosCursados: 0,
        cursos: [101, 102]
    },
    {
        id: 2,
        nombre: "Fulano",
        matricula: 201803,
        semestre: 3,
        creditosCursados: 24,
        cursos: [102]
    },
    {
        id: 3,
        nombre: "Beltran",
        matricula: 201804,
        semestre: 7,
        creditosCursados: 200,
        cursos: [103]
    }
];

// Funciones del modelo
const findAll = () => estudiantes;

const findById = (id) => estudiantes.find(est => est.id === id);

const createEstudiante = (estudiante) => {
    estudiantes.push(estudiante);
    return estudiante; // Devuelve el nuevo estudiante
};

const updateEstudiante = (id, data) => {
    const index = estudiantes.findIndex(e => e.id === id);
    if (index !== -1) {
        estudiantes[index] = { ...estudiantes[index], ...data };
        return estudiantes[index]; // Devuelve el estudiante actualizado
    }
    return null; // Devuelve null si no se encontró
};

const deleteEstudiante = (id) => {
    const index = estudiantes.findIndex(e => e.id === id);
    if (index !== -1) {
        return estudiantes.splice(index, 1)[0]; // Devuelve el estudiante eliminado
    }
    return null; // Devuelve null si no se encontró
};

// Operaciones especiales
const inscribirEstudianteEnCurso = (idEstudiante, idCurso) => {
    const estudiante = findById(idEstudiante);
    if (!estudiante) throw new Error(`Estudiante con id ${idEstudiante} no encontrado`);
    if (!estudiante.cursos.includes(idCurso)) {
        estudiante.cursos.push(idCurso);
    }
    return estudiante.cursos;
};

const eliminarEstudianteDeCurso = (idEstudiante, idCurso) => {
    const estudiante = findById(idEstudiante);
    if (!estudiante) throw new Error(`Estudiante con id ${idEstudiante} no encontrado`);
    const index = estudiante.cursos.indexOf(idCurso);
    if (index !== -1) {
        estudiante.cursos.splice(index, 1);
        return true;
    }
    return false;
};

const obtenerCursosDeEstudiante = (idEstudiante) => {
    const estudiante = findById(idEstudiante);
    if (!estudiante) throw new Error(`Estudiante con id ${idEstudiante} no encontrado`);
    return estudiante.cursos.map(cursoId => cursos.findById(cursoId));
};

const obtenerProfesoresDeEstudiante = (idEstudiante) => {
    const estudiante = findById(idEstudiante);
    if (!estudiante) throw new Error(`Estudiante con id ${idEstudiante} no encontrado`);
    
    const profes = [];
    for (const cursoId of estudiante.cursos) {
        const curso = cursos.findById(cursoId);
        if (curso) {
            const p = profesores.findById(curso.profesorId);
            if (p) {
                profes.push(p);
            }
        }
    }
    return profes;
};

exports.findAll = findAll;
exports.findById = findById;
exports.createEstudiante = createEstudiante;
exports.updateEstudiante = updateEstudiante;
exports.deleteEstudiante = deleteEstudiante;
exports.inscribirEstudianteEnCurso = inscribirEstudianteEnCurso;
exports.eliminarEstudianteDeCurso = eliminarEstudianteDeCurso;
exports.obtenerCursosDeEstudiante = obtenerCursosDeEstudiante;
exports.obtenerProfesoresDeEstudiante = obtenerProfesoresDeEstudiante;
