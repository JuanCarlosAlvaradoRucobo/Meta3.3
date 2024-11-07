const { curso, estudiante, maestro, profesores_cursos, alumnos_cursos } = require('./models');

async function consulta() {   
    // Obtener todos los cursos y mostrarlos
    const cursos = await curso.findAll();
    cursos.forEach(curso => {
        console.log("Curso:", curso.dataValues);
    });

    // Obtener todos los estudiantes y mostrarlos
    const estudiantes = await estudiante.findAll();
    estudiantes.forEach(est => {
        console.log("Estudiante:", est.dataValues);
    });

    // Obtener todos los maestros y mostrarlos
    const maestros = await maestro.findAll();
    maestros.forEach(mae => {
        console.log("Maestro:", mae.dataValues);
    });

    // Ejemplo de buscar por llave primaria
    const estudiante1 = await estudiante.findByPk(1); // Cambia el ID según sea necesario
    const curso1 = await curso.findByPk(1);

    if (estudiante1 && curso1) {
        await estudiante1.addCurso(curso1); // Relaciona estudiante con curso
        console.log(`El estudiante ${estudiante1.nombre} se ha inscrito en el curso ${curso1.nombre}`);
    }

    const maestro1 = await maestro.findByPk(2); // Cambia el ID según sea necesario
    if (maestro1 && curso1) {
        await maestro1.addCurso(curso1); // Relaciona maestro con curso
        console.log(`El maestro ${maestro1.nombre} enseña el curso ${curso1.nombre}`);
    }

    // Consultar un estudiante con sus cursos
    const estudianteConCursos = await estudiante.findOne({
        where: { id: 1 },
        include: [{ model: curso, as: 'cursos' }] // Incluye los cursos relacionados
    });
    if (estudianteConCursos) {
        console.log("Estudiante y sus cursos:", estudianteConCursos.dataValues);
        console.log("Cursos:", estudianteConCursos.cursos.map(c => c.dataValues.nombre));
    }

    // Consultar un maestro con sus cursos
    const maestroConCursos = await maestro.findOne({
        where: { id: 2 },
        include: [{ model: curso, as: 'cursos' }]
    });
    if (maestroConCursos) {
        console.log("Maestro y sus cursos:", maestroConCursos.dataValues);
        console.log("Cursos:", maestroConCursos.cursos.map(c => c.dataValues.nombre));
    }

    await sequelize.close();
}

consulta();
