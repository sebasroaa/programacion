const readlineSync = require('readline-sync');

class Persona {
    nombre="";
    identificacion="";
    telefono = "";
      correo = "";
   
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

class Maestro extends Persona {
    constructor(nombre, identificacion, telefono, correo, carrera, jornada, tipoContrato, maestria) {
        super(nombre, identificacion, telefono, correo);
        this.carrera = carrera;
        this.jornada = jornada;
        this.tipoContrato = tipoContrato;
        this.maestria = maestria;
    }

    ingresarMaestro() {
        this.nombre = readlineSync.question('Por favor ingresa el nombre del Maestro: ');
        if (!this.nombre) {
            throw new Error(`Debe ingresar el nombre: `);
        }
        this.identificacion = readlineSync.question(`Por favor ingrese la identificacion del Maestro: `);
        if (!this.identificacion) {
            throw new Error(`Debe ingresar la identificación: `);
        }
        this.telefono = readlineSync.question('Por favor ingresa el telefono del Maestro: ');
        if (!this.telefono) {
            throw new Error(`Debe ingresar el telefono del Maestro: `);
        }
        this.correo = readlineSync.question('Por favor ingresa el correo del Maestro: ');
        if (!this.correo) {
            throw new Error(`Debe ingresar el correo del Maestro: `);
        }
        this.carrera = readlineSync.question('Por favor ingresa el titulo del Maestro: ');
        if (!this.carrera) {
            throw new Error(`Debe ingresar el titulo del Maestro: `);
        }
        this.jornada = readlineSync.question('Por favor ingresa la jornada del Maestro (diurno, nocturno): ');
        if (!this.jornada) {
            throw new Error(`Debe ingresar la jornada del Maestro: `);
        }
        this.tipoContrato = readlineSync.question('Por favor ingresa el tipo de contrato del Maestro (planta, catedratico, catedraticoAsociado): ');
        if (!this.tipoContrato) {
            throw new Error(`Debe ingresar el tipo de contrato del Maestro: `);
        }
        this.maestria = readlineSync.question('Tiene maestria (s/n): ');
        if (!this.maestria) {
            throw new Error(`Debe ingresar si el Maestro cuenta con maestria: `);
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
    constructor(nombre, numeroHoras, listaMaestros) {
        this.nombre = nombre;
        this.numeroHoras = numeroHoras;
        this.listaMaestros = listaMaestros || [];
    }

    ingresarAsignaturas() {
        this.nombre = readlineSync.question('Por favor ingresa el nombre de la asignatura: ');
        if (!this.nombre) {
            throw new Error(`Debe ingresar el nombre: `);
        }    
        this.numeroHoras = parseFloat(readlineSync.question('Por favor ingresa las horas de la asignatura: '));
        if (!this.numeroHoras) {
            throw new Error(`Debe ingresar el numero de horas de la asignatura: `);
        }
        let agregarMaestro = 's';

        while (agregarMaestro.toLowerCase() === 's') {
            let maestro = new Maestro();
            maestro.ingresarMaestro();
            this.listaMaestros.push(new Maestro(maestro.nombre, maestro.identificacion, Maestro.telefono, maestro.correo, maestro.carrera, maestro.jornada, maestro.tipoContrato, maestro.maestria));
            agregarMaestro = readlineSync.question('¿Deseas ingresar otro Maestro para esta asignatura? (s/n): ');
        }
    }
}

class Programa {
    nombre ="";
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
            for (let k = 0; k < asignatura.listaMaestros.length; k++) {
                let Maestro = asignatura.listaMaestros[k];
                costoTotalNomina += Maestro.calcularSalario(asignatura.numeroHoras, Maestro.tipoContrato, Maestro.jornada);
            }
        }
    }
    console.info("El costo total de la nómina de la universidad es: $" + costoTotalNomina.toFixed(2));
}

function obtenerCostoPorPrograma() {
    let nombrePrograma = readlineSync.question('Ingrese el nombre del programa para calcular su costo de nómina: ');
    let costoTotalNominaPrograma = 0;
    for (let i = 0; i < lstProgramas.length; i++) {
        let programa = lstProgramas[i];
        if (programa.nombre.toLowerCase() === nombrePrograma.toLowerCase()) {
            for (let j = 0; j < programa.lstAsignatura.length; j++) {
                let asignatura = programa.lstAsignatura[j];
                for (let k = 0; k < asignatura.listaMaestros.length; k++) {
                    let Maestro = asignatura.listaMaestros[k];
                    costoTotalNominaPrograma += Maestro.calcularSalario(asignatura.numeroHoras, Maestro.tipoContrato, Maestro.jornada);
                }
            }
            break; 
        }
    }
    console.info(`El costo total de la nómina del programa ${nombrePrograma} es: $${costoTotalNominaPrograma.toFixed(2)}`);
}

function mostrarListadoProgramas() {
    console.info("\nListado de programas:");
    for (let i = 0; i < lstProgramas.length; i++) {
        console.info(`${i + 1}. ${lstProgramas[i].nombre}`);
    }
}

function obtenerPromedioCostoMaestroes() {
    let costoTotalMaestroes = 0;
    let totalMaestroes = 0;

    for (let i = 0; i < lstProgramas.length; i++) {
        let programa = lstProgramas[i];
        for (let j = 0; j < programa.lstAsignatura.length; j++) {
            let asignatura = programa.lstAsignatura[j];
            for (let k = 0; k < asignatura.listaMaestros.length; k++) {
                let Maestro = asignatura.listaMaestros[k];
                if (Maestro.jornada.toLowerCase() === 'diurno') {
                    costoTotalMaestroes += Maestro.calcularSalario(asignatura.numeroHoras, Maestro.tipoContrato, Maestro.jornada);
                    totalMaestroes++;
                }
            }
        }
    }

    if (totalMaestroes === 0) {
        console.info("No hay Maestroes diurnos registrados.");
    } else {
        let promedioCosto = costoTotalMaestroes / totalMaestroes;
        console.info("El promedio del costo de los Maestroes diurnos que dan clases es: $" + promedioCosto.toFixed(2));
    }
}

function seleccionarMaestro() {
    let nombreMaestro = readlineSync.question('Ingrese el nombre del Maestro: ');
    let datosMaestro = obtenerDatosMaestro(nombreMaestro);
    console.info(`Total a pagar al Maestro ${nombreMaestro}: $${datosMaestro.totalPago.toFixed(2)}`);
    console.info(`Horas extras diurnas: ${datosMaestro.horasExtrasDiurnas}`);
    console.info(`Horas extras nocturnas: ${datosMaestro.horasExtrasNocturnas}`);
}

function obtenerDatosMaestro(nombreMaestro) {
    let totalPago = 0;
    let horasExtrasDiurnas = 0;
    let horasExtrasNocturnas = 0;

    for (let i = 0; i < lstProgramas.length; i++) {
        let programa = lstProgramas[i];
        for (let j = 0; j < programa.lstAsignatura.length; j++) {
            let asignatura = programa.lstAsignatura[j];
            for (let k = 0; k < asignatura.listaMaestros.length; k++) {
                let Maestro = asignatura.listaMaestros[k];
                if (Maestro.nombre.toLowerCase() === nombreMaestro.toLowerCase()) {
                    totalPago += Maestro.calcularSalario(asignatura.numeroHoras, Maestro.tipoContrato, Maestro.jornada);
                    
                    if (Maestro.jornada.toLowerCase() === 'diurno') {
                        let horasExtraDiurnas = asignatura.numeroHoras - this.horasRegulares;
                        if (horasExtraDiurnas < 0) {
                            horasExtraDiurnas = 0; 
                        }
                        horasExtrasDiurnas += horasExtraDiurnas;
                    }
                    
                    if (Maestro.jornada.toLowerCase() === 'nocturno') {
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

function mostrarListadoMaestroes() {
    console.info("\nListado de Maestroes:");
    for (let i = 0; i < lstProgramas.length; i++) {
        let programa = lstProgramas[i];
        for (let j = 0; j < programa.lstAsignatura.length; j++) {
            let asignatura = programa.lstAsignatura[j];
            for (let k = 0; k < asignatura.listaMaestros.length; k++) {
                let Maestro = asignatura.listaMaestros[k];
                console.info(`Nombre: ${Maestro.nombre}`);
            }
        }
    }
}

function calcularPagoMaestroesPlanta() {
    let totalPago = 0;

    for (let i = 0; i < lstProgramas.length; i++) {
        let programa = lstProgramas[i];
        for (let j = 0; j < programa.lstAsignatura.length; j++) {
            let asignatura = programa.lstAsignatura[j];
            for (let k = 0; k < asignatura.listaMaestros.length; k++) {
                let Maestro = asignatura.listaMaestros[k];
                if (Maestro.tipoContrato === 'planta') {
                    totalPago += Maestro.calcularSalario(asignatura.numeroHoras, Maestro.tipoContrato, Maestro.jornada);
                }
            }
        }
    }

    console.info(`El total a pagar a los Maestroes de planta es: $${totalPago.toFixed(2)}`);
}

function calcularPagoMaestroesCatedraticos() {
    let totalPago = 0;

    for (let i = 0; i < lstProgramas.length; i++) {
        let programa = lstProgramas[i];
        for (let j = 0; j < programa.lstAsignatura.length; j++) {
            let asignatura = programa.lstAsignatura[j];
            for (let k = 0; k < asignatura.listaMaestros.length; k++) {
                let Maestro = asignatura.listaMaestros[k];
                if (Maestro.tipoContrato === 'catedratico') {
                    totalPago += Maestro.calcularSalario(asignatura.numeroHoras, Maestro.tipoContrato, Maestro.jornada);
                }
            }
        }
    }

    console.info(`El total a pagar a los Maestroes catedráticos es: $${totalPago.toFixed(2)}`);
}

function contarMaestroesMaestria() {
    let totalMaestroesMaestria = 0;

    for (let i = 0; i < lstProgramas.length; i++) {
        let programa = lstProgramas[i];
        for (let j = 0; j < programa.lstAsignatura.length; j++) {
            let asignatura = programa.lstAsignatura[j];
            for (let k = 0; k < asignatura.listaMaestros.length; k++) {
                let Maestro = asignatura.listaMaestros[k];
                if (Maestro.maestria.toLowerCase() === 's') {
                    totalMaestroesMaestria++;
                }
            }
        }
    }

    console.info(`El total de Maestroes con maestría es: ${totalMaestroesMaestria}`);
}

function mostrarMenu() {
    console.info("\nMenú:");
    console.info("1. Ingresar programa");
    console.info("2. Obtener costo total de la nómina de la universidad");
    console.info("3. Obtener costo por programa");
    console.info("4. Mostrar listado de programas");
    console.info("5. Obtener promedio del costo de los Maestroes que dan clases");
    console.info("6. Costo por Maestro");
    console.info("7. Mostrar listado de Maestroes");
    console.info("8. Calcular pago a los Maestroes de planta");
    console.info("9. Calcular pago a los Maestroes catedráticos");
    console.info("10. Contar Maestroes con maestría");
    console.info("11. Salir");
}

function iniciar() {
    let opcion;
    do {
        mostrarMenu();
        opcion = parseInt(readlineSync.question('Ingrese una opcion: '));

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
                obtenerPromedioCostoMaestroes();
                break;
            case 6:
                seleccionarMaestro();
                break;
            case 7:
                mostrarListadoMaestroes();
                break;
            case 8:
                calcularPagoMaestroesPlanta();
                break;
            case 9:
                calcularPagoMaestroesCatedraticos();
                break;
            case 10:
                contarMaestroesMaestria();
                break;
            case 11:
                console.info("Saliendo del programa...");
                break;
            default:
                console.info("Opción inválida. Por favor ingrese una opción válida.");
                break;
        }
    } while (opcion !== 11);
}

iniciar();