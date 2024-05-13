const readlineSync = require('readline-sync');

class Persona {
    constructor(nombre, identificacion, telefono, correo) {
        this.nombre = nombre;
        this.identificacion = identificacion;
        this.telefono = telefono;
        this.correo = correo;
    }
}

const tiposContrato = [
    {nombre: "planta", valorHora: 10000},
    {nombre: "catedratico", valorHora: 20000},
    {nombre: "catedraticoAsociado", valorHora: 20000 + (20000 * 0.7)} 
];

const jornada = [
    {nombre: "diurno", recargo: 3},
    {nombre: "nocturno", recargo: 3 + (5 * 0.5)}
];

const horasRegulares = 40;

let lstProgramas = [];

class Profesor extends Persona {
    constructor(nombre, identificacion, telefono, correo, carrera, jornada, tipoContrato, maestria) {
        super(nombre, identificacion, telefono, correo);
        this.carrera = carrera;
        this.jornada = jornada;
        this.tipoContrato = tipoContrato;
        this.maestria = maestria;
    }

    ingresarProfesor() {
        this.nombre = readlineSync.question('Por favor ingresa el nombre del profesor: ');
        if (!this.nombre) {
            throw new Error(`Debe ingresar el nombre: `);
        }
        this.identificacion = readlineSync.question(`Por favor ingrese la identificacion del profesor: `);
        if (!this.identificacion) {
            throw new Error(`Debe ingresar la identificación: `);
        }
        this.telefono = readlineSync.question('Por favor ingresa el telefono del profesor: ');
        if (!this.telefono) {
            throw new Error(`Debe ingresar el telefono del profesor: `);
        }
        this.correo = readlineSync.question('Por favor ingresa el correo del profesor: ');
        if (!this.correo) {
            throw new Error(`Debe ingresar el correo del profesor: `);
        }
        this.carrera = readlineSync.question('Por favor ingresa el titulo del profesor: ');
        if (!this.carrera) {
            throw new Error(`Debe ingresar el titulo del profesor: `);
        }
        this.jornada = readlineSync.question('Por favor ingresa la jornada del profesor (diurno, nocturno): ');
        if (!this.jornada) {
            throw new Error(`Debe ingresar la jornada del profesor: `);
        }
        this.tipoContrato = readlineSync.question('Por favor ingresa el tipo de contrato del profesor (planta, catedratico, catedraticoAsociado): ');
        if (!this.tipoContrato) {
            throw new Error(`Debe ingresar el tipo de contrato del profesor: `);
        }
        this.maestria = readlineSync.question('Tiene maestria (s/n): ');
        if (!this.maestria) {
            throw new Error(`Debe ingresar si el profesor cuenta con maestria: `);
        }
    }

    calcularSalario(numeroHoras, tipoContrato, jornada) {
        let tarifaHora = 0;

        for (let i = 0; i < tiposContrato.length; i++) {
            if (tiposContrato[i].nombre === tipoContrato) {
                tarifaHora = tiposContrato[i].valorHora;
                break;
            }
        }

        let recargo = 0;

        for (let i = 0; i < jornada.length; i++) {
            if (jornada[i].nombre === jornada) {
                recargo = jornada[i].valorHora;
                break;
            }
        }

        let salario = numeroHoras * tarifaHora;
        if (recargo !== 0) {
            salario += (salario * (recargo / 100)); 
        }

        return salario;
    }
}

class Asignatura {
    constructor(nombre, numeroHoras, lstProfesores) {
        this.nombre = nombre;
        this.numeroHoras = numeroHoras;
        this.lstProfesores = lstProfesores || [];
    }

    ingresarAsignaturas() {
        this.nombre = readlineSync.question('Por favor ingresa el nombre de la asignatura: ');
        this.numeroHoras = parseFloat(readlineSync.question('Por favor ingresa las horas de la asignatura: '));
        let agregarProfesor = 's';

        while (agregarProfesor.toLowerCase() === 's') {
            let profesor = new Profesor();
            profesor.ingresarProfesor();
            this.lstProfesores.push(new Profesor(profesor.nombre, profesor.identificacion, profesor.telefono, profesor.correo, profesor.carrera, profesor.jornada, profesor.tipoContrato, profesor.maestria));
            agregarProfesor = readlineSync.question('¿Deseas ingresar otro profesor para esta asignatura? (s/n): ');
        }
    }
}

class Programa {
    constructor(nombre) {
        this.nombre = nombre;
        this.lstAsignatura = [];
    }

    ingresarProgramas() {
        this.nombre = readlineSync.question('Por favor ingresa el nombre del programa: ');
        let agregarAsignatura = 's';

        while (agregarAsignatura.toLowerCase() === 's') {
            let asignatura = new Asignatura();
            asignatura.ingresarAsignaturas();
            this.lstAsignatura.push(asignatura);
            agregarAsignatura = readlineSync.question('¿Deseas ingresar otra asignatura para este programa? (s/n): ');
        }

        lstProgramas.push(this);
    }
}

function ingresarPrograma() {
    let nuevoPrograma = new Programa();
    nuevoPrograma.ingresarProgramas();
}

function obtenerCostoTotalNomina() {
    let costoTotalNomina = 0;
    for (let i = 0; i < lstProgramas.length; i++) {
        let programa = lstProgramas[i];
        for (let j = 0; j < programa.lstAsignatura.length; j++) {
            let asignatura = programa.lstAsignatura[j];
            for (let k = 0; k < asignatura.lstProfesores.length; k++) {
                let profesor = asignatura.lstProfesores[k];
                costoTotalNomina += profesor.calcularSalario(asignatura.numeroHoras, profesor.tipoContrato, profesor.jornada);
            }
        }
    }
    console.log("El costo total de la nómina de la universidad es: $" + costoTotalNomina.toFixed(2));
}

function obtenerCostoPorPrograma() {
    let nombrePrograma = readlineSync.question('Ingrese el nombre del programa para calcular su costo de nómina: ');
    let costoTotalNominaPrograma = 0;
    for (let i = 0; i < lstProgramas.length; i++) {
        let programa = lstProgramas[i];
        if (programa.nombre.toLowerCase() === nombrePrograma.toLowerCase()) {
            for (let j = 0; j < programa.lstAsignatura.length; j++) {
                let asignatura = programa.lstAsignatura[j];
                for (let k = 0; k < asignatura.lstProfesores.length; k++) {
                    let profesor = asignatura.lstProfesores[k];
                    costoTotalNominaPrograma += profesor.calcularSalario(asignatura.numeroHoras, profesor.tipoContrato, profesor.jornada);
                }
            }
            break; 
        }
    }
    console.log(`El costo total de la nómina del programa ${nombrePrograma} es: $${costoTotalNominaPrograma.toFixed(2)}`);
}

function mostrarListadoProgramas() {
    console.log("\nListado de programas:");
    for (let i = 0; i < lstProgramas.length; i++) {
        console.log(`${i + 1}. ${lstProgramas[i].nombre}`);
    }
}

function obtenerPromedioCostoProfesores() {
    let costoTotalProfesores = 0;
    let totalProfesores = 0;

    for (let i = 0; i < lstProgramas.length; i++) {
        let programa = lstProgramas[i];
        for (let j = 0; j < programa.lstAsignatura.length; j++) {
            let asignatura = programa.lstAsignatura[j];
            for (let k = 0; k < asignatura.lstProfesores.length; k++) {
                let profesor = asignatura.lstProfesores[k];
                if (profesor.jornada.toLowerCase() === 'diurno') {
                    costoTotalProfesores += profesor.calcularSalario(asignatura.numeroHoras, profesor.tipoContrato, profesor.jornada);
                    totalProfesores++;
                }
            }
        }
    }

    if (totalProfesores === 0) {
        console.log("No hay profesores diurnos registrados.");
    } else {
        let promedioCosto = costoTotalProfesores / totalProfesores;
        console.log("El promedio del costo de los profesores diurnos que dan clases es: $" + promedioCosto.toFixed(2));
    }
}

function seleccionarProfesor() {
    let nombreProfesor = readlineSync.question('Ingrese el nombre del profesor: ');
    let datosProfesor = obtenerDatosProfesor(nombreProfesor);
    console.log(`Total a pagar al profesor ${nombreProfesor}: $${datosProfesor.totalPago.toFixed(2)}`);
    console.log(`Horas extras diurnas: ${datosProfesor.horasExtrasDiurnas}`);
    console.log(`Horas extras nocturnas: ${datosProfesor.horasExtrasNocturnas}`);
}

function obtenerDatosProfesor(nombreProfesor) {
    let totalPago = 0;
    let horasExtrasDiurnas = 0;
    let horasExtrasNocturnas = 0;

    for (let i = 0; i < lstProgramas.length; i++) {
        let programa = lstProgramas[i];
        for (let j = 0; j < programa.lstAsignatura.length; j++) {
            let asignatura = programa.lstAsignatura[j];
            for (let k = 0; k < asignatura.lstProfesores.length; k++) {
                let profesor = asignatura.lstProfesores[k];
                if (profesor.nombre.toLowerCase() === nombreProfesor.toLowerCase()) {
                    totalPago += profesor.calcularSalario(asignatura.numeroHoras, profesor.tipoContrato, profesor.jornada);
                    
                    if (profesor.jornada.toLowerCase() === 'diurno') {
                        let horasExtraDiurnas = asignatura.numeroHoras - this.horasRegulares;
                        if (horasExtraDiurnas < 0) {
                            horasExtraDiurnas = 0; 
                        }
                        horasExtrasDiurnas += horasExtraDiurnas;
                    }
                    
                    if (profesor.jornada.toLowerCase() === 'nocturno') {
                        let horasExtraNocturnas = asignatura.numeroHoras - this.horasRegulares;
                        if (horasExtraNocturnas < 0) {
                            horasExtraNocturnas = 0; 
                        }
                        horasExtrasNocturnas += horasExtraNocturnas;
                    }
                }
            }
        }
    }

    return {
        totalPago: totalPago,
        horasExtrasDiurnas: horasExtrasDiurnas,
        horasExtrasNocturnas: horasExtrasNocturnas
    };
}

function mostrarListadoProfesores() {
    console.log("\nListado de profesores:");
    for (let i = 0; i < lstProgramas.length; i++) {
        let programa = lstProgramas[i];
        for (let j = 0; j < programa.lstAsignatura.length; j++) {
            let asignatura = programa.lstAsignatura[j];
            for (let k = 0; k < asignatura.lstProfesores.length; k++) {
                let profesor = asignatura.lstProfesores[k];
                console.log(`Nombre: ${profesor.nombre}`);
            }
        }
    }
}

function calcularPagoProfesoresPlanta() {
    let totalPago = 0;

    for (let i = 0; i < lstProgramas.length; i++) {
        let programa = lstProgramas[i];
        for (let j = 0; j < programa.lstAsignatura.length; j++) {
            let asignatura = programa.lstAsignatura[j];
            for (let k = 0; k < asignatura.lstProfesores.length; k++) {
                let profesor = asignatura.lstProfesores[k];
                if (profesor.tipoContrato === 'planta') {
                    totalPago += profesor.calcularSalario(asignatura.numeroHoras, profesor.tipoContrato, profesor.jornada);
                }
            }
        }
    }

    console.log(`El total a pagar a los profesores de planta es: $${totalPago.toFixed(2)}`);
}

function calcularPagoProfesoresCatedraticos() {
    let totalPago = 0;

    for (let i = 0; i < lstProgramas.length; i++) {
        let programa = lstProgramas[i];
        for (let j = 0; j < programa.lstAsignatura.length; j++) {
            let asignatura = programa.lstAsignatura[j];
            for (let k = 0; k < asignatura.lstProfesores.length; k++) {
                let profesor = asignatura.lstProfesores[k];
                if (profesor.tipoContrato === 'catedratico') {
                    totalPago += profesor.calcularSalario(asignatura.numeroHoras, profesor.tipoContrato, profesor.jornada);
                }
            }
        }
    }

    console.log(`El total a pagar a los profesores catedráticos es: $${totalPago.toFixed(2)}`);
}

function contarProfesoresMaestria() {
    let totalProfesoresMaestria = 0;

    for (let i = 0; i < lstProgramas.length; i++) {
        let programa = lstProgramas[i];
        for (let j = 0; j < programa.lstAsignatura.length; j++) {
            let asignatura = programa.lstAsignatura[j];
            for (let k = 0; k < asignatura.lstProfesores.length; k++) {
                let profesor = asignatura.lstProfesores[k];
                if (profesor.maestria.toLowerCase() === 's') {
                    totalProfesoresMaestria++;
                }
            }
        }
    }

    console.log(`El total de profesores con maestría es: ${totalProfesoresMaestria}`);
}

function mostrarMenu() {
    console.log("\nMenú:");
    console.log("1. Ingresar programa");
    console.log("2. Obtener costo total de la nómina de la universidad");
    console.log("3. Obtener costo por programa");
    console.log("4. Mostrar listado de programas");
    console.log("5. Obtener promedio del costo de los profesores que dan clases");
    console.log("6. Costo por profesor");
    console.log("7. Mostrar listado de profesores");
    console.log("8. Calcular pago a los profesores de planta");
    console.log("9. Calcular pago a los profesores catedráticos");
    console.log("10. Contar profesores con maestría");
    console.log("11. Salir");
}

function iniciar() {
    let opcion;
    do {
        mostrarMenu();
        opcion = parseInt(readlineSync.question('Ingrese una opción: '));

        switch (opcion) {
            case 1:
                ingresarPrograma();
                break;
            case 2:
                obtenerCostoTotalNomina();
                break;
            case 3:
                obtenerCostoPorPrograma();
                break;
            case 4:
                mostrarListadoProgramas();
                break;
            case 5:
                obtenerPromedioCostoProfesores();
                break;
            case 6:
                seleccionarProfesor();
                break;
            case 7:
                mostrarListadoProfesores();
                break;
            case 8:
                calcularPagoProfesoresPlanta();
                break;
            case 9:
                calcularPagoProfesoresCatedraticos();
                break;
            case 10:
                contarProfesoresMaestria();
                break;
            case 11:
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción inválida. Por favor ingrese una opción válida.");
                break;
        }
    } while (opcion !== 11);
}

iniciar();