const readlineSync = require('readline-sync');

class Maestro {
    constructor(nombre, identificacion, telefono, correo) {
        this.nombre = nombre;
        this.identificacion = identificacion;
        this.telefono = telefono;
        this.correo = correo;
    }

    ingresarMaestro() {
        this.nombre = readlineSync.question('Por favor ingresa el nombre del maestro: ');
        if (!this.nombre) {
            throw new Error(`Debe ingresar el nombre.`);
        }
        this.identificacion = readlineSync.question(`Por favor ingrese la identificación del maestro: `);
        if (!this.identificacion) {
            throw new Error(`Debe ingresar la identificación.`);
        }
        this.telefono = readlineSync.question('Por favor ingresa el teléfono del maestro: ');
        if (!this.telefono) {
            throw new Error(`Debe ingresar el teléfono.`);
        }
        this.correo = readlineSync.question('Por favor ingresa el correo del maestro: ');
        if (!this.correo) {
            throw new Error(`Debe ingresar el correo.`);
        }
    }
}

class TipoMaestro extends Maestro {
    constructor(nombre, identificacion, telefono, correo, tipoMaestro) {
        super(nombre, identificacion, telefono, correo);
        if (!tipoMaestro) {
            throw new Error("El tipo de maestro no está especificado.");
        }
        this.tipoMaestro = tipoMaestro;
    }

    salarioPorHora() { }
    pagoExtras() { }
}

class MaestroPlanta extends TipoMaestro {
    constructor(nombre, identificacion, telefono, correo) {
        super(nombre, identificacion, telefono, correo, "planta");
    }

    salarioPorHora() {
        return 10000;
    }

    pagoExtras(jornadaElegida) {
        if (jornadaElegida === "d") {
            return this.salarioPorHora() + (this.salarioPorHora() * 0.05);
        } else if (jornadaElegida === "n") {
            return this.salarioPorHora() + (this.salarioPorHora() * 0.10);
        }
    }
}

class MaestroCatedratico extends TipoMaestro {
    constructor(nombre, identificacion, telefono, correo) {
        super(nombre, identificacion, telefono, correo, "catedratico");
    }

    salarioPorHora() {
        return 8000;
    }

    pagoExtras(jornadaElegida) {
        if (jornadaElegida === "d") {
            return this.salarioPorHora() + (this.salarioPorHora() * 0.05);
        } else if (jornadaElegida === "n") {
            return this.salarioPorHora() + (this.salarioPorHora() * 0.10);
        }
    }
}

class MaestroCatedraticoAsociado extends TipoMaestro {
    constructor(nombre, identificacion, telefono, correo) {
        super(nombre, identificacion, telefono, correo, "catedraticoAsociado");
    }

    salarioPorHora() {
        return 8000 + (8000 * 0.07);
    }

    pagoExtras(jornadaElegida) {
        if (jornadaElegida === "d") {
            return this.salarioPorHora() + (this.salarioPorHora() * 0.05);
        } else if (jornadaElegida === "n") {
            return this.salarioPorHora() + (this.salarioPorHora() * 0.10);
        }
    }
}

class Asignatura {
    constructor(nombre, numeroHoras, listaMaestros) {
        this.nombre = nombre;
        this.numeroHoras = numeroHoras;
        this.listaMaestros = listaMaestros || [];
    }

    ingresarAsignatura() {
        this.nombre = readlineSync.question('Por favor ingresa el nombre de la asignatura: ');
        this.numeroHoras = parseFloat(readlineSync.question('Por favor ingresa las horas de la asignatura: '));
        let agregarMaestro = 's';

        while (agregarMaestro.toLowerCase() === 's') {
            const maestro = seleccionarTipoMaestro();
            this.listaMaestros.push(maestro);
            agregarMaestro = readlineSync.question('¿Deseas ingresar otro maestro para esta asignatura? (s/n): ');
        }
    }
}

function seleccionarTipoMaestro() {
    const tipoContrato = readlineSync.question(`Seleccione el tipo de contrato del maestro (planta, catedratico, catedraticoAsociado): `);
    const nombre = readlineSync.question('Por favor ingresa el nombre del maestro: ');
    const identificacion = readlineSync.question(`Por favor ingrese la identificación del maestro: `);
    const telefono = readlineSync.question('Por favor ingresa el teléfono del maestro: ');
    const correo = readlineSync.question('Por favor ingresa el correo del maestro: ');

    if (tipoContrato === "planta") {
        return new MaestroPlanta(nombre, identificacion, telefono, correo);
    } else if (tipoContrato === "catedratico") {
        return new MaestroCatedratico(nombre, identificacion, telefono, correo);
    } else if (tipoContrato === "catedraticoAsociado") {
        return new MaestroCatedraticoAsociado(nombre, identificacion, telefono, correo);
    } else {
        throw new Error("Tipo de contrato no válido.");
    }
}

class Programa {
    constructor(nombre) {
        this.nombre = nombre;
        this.listaAsignaturas = [];
    }

    ingresarPrograma() {
        this.nombre = readlineSync.question('Por favor ingresa el nombre del programa: ');
        let agregarAsignatura = 's';

        while (agregarAsignatura.toLowerCase() === 's') {
            const asignatura = new Asignatura();
            asignatura.ingresarAsignatura();
            this.listaAsignaturas.push(asignatura);
            agregarAsignatura = readlineSync.question('¿Deseas ingresar otra asignatura para este programa? (s/n): ');
        }
    }
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
    const listaProgramas = [];
    let opcion;
   
    do {
        mostrarMenu();
        opcion = parseInt(readlineSync.question('Ingrese una opcion: '));

        switch (opcion) {
            case 1:
                ingresarPrograma();
                const programa = new Programa();
                programa.ingresarPrograma();
                listaProgramas.push(programa);
                break;
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
                mostrarListadoProfesores(listaProgramas);
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