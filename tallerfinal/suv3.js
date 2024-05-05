const readlineSync = require(`readline-sync`);

class Asignatura {
    nombreA = "";
    horas = 0;
    programa = ""; //contaduria publica , Administracion de empresas, Ingenieria de sistemas,ingenieria seguridad informatica, psicologia
    horario = ""; //dia o noche
    requiereMaestria = false;

    constructor(nombreA, horas, programa, horario) {
        this.nombreA = nombreA;
        this.horas = horas;
        this.programa = programa;
        this.horario = horario;
        this.requiereMaestria = false;
    }

    ingresarAsignatura() {
        this.nombreA = readlineSync.question('Por favor ingresa el nombre de la asignatura: ');
        this.horas = parseFloat(readlineSync.question('Por favor ingresa las horas de la asignatura: '));
        this.programa = readlineSync.question('Por favor ingresa el nombre de la facultad: ');
        const jornadaelegida = readlineSync.question(`Que tipo de jornada va a tener la asignatura Diurna(d) o Nocturna(n): `);
        if (jornadaelegida == 'd') {
            console.info("La jornada selecionada es diurna ");
        } else if (jornadaelegida == 'n') {
            console.info("La jornada selecionada es nocturna");
        } else {
            console.info("No seleciono ninguna opcion")
        }
    }

    calcularRecargo(recargomaestria) {
        if (this.requiereMaestria) {
            //utilizamos el toLowerCase para convertir el texto a minusco y no nos muestre un error 
            if (this.horario.toLowerCase() == 'd') {
                return this.horas * recargomaestria / 100;
            } else if (this.horario.toLowerCase() == 'n') {
                return this.horas * (recargomaestria + 5) / 100;
            }
        }
        return 0;
    }
}

let listaAsignatura = [];

// Crear una nueva instancia de Asignatura e ingresar datos
let agregar = 's';
//utilizamos el toLowerCase para convertir el texto a minusco y no nos muestre un error 
while (agregar.toLowerCase() == 's') {
    let asignatura = new Asignatura();
    asignatura.ingresarAsignatura();
    let maestria = readlineSync.question('La asignatura requiere maestria? (s/n): ');
    asignatura.requiereMaestria = (maestria.toLowerCase() === 's');
    //Con el push ingresamos los datos a la lista que solciitamos 
    listaAsignatura.push(asignatura);
    agregar = readlineSync.question('¿Deseas ingresar otra asignatura? (s/n): ');
}

class Maestro {
    nombre = "";
    telefono = "";
    correo = "";
    carrera = "";
    contrato = null;
    salarioPorHora = 0;

    constructor(nombre, telefono, correo, carrera) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.correo = correo;
        this.carrera = carrera;
    }

    ingresarDatos() {
        this.nombre = readlineSync.question('Por favor ingresa el nombredel maestro: ');
        if (!this.nombre) {
            throw new Eror(`Debe ingresar el nombre: `);
        }
        this.telefono = readlineSync.question('Por favor ingresa el telefono del maestro: ');
        if (!this.telefono) {
            throw new Eror(`Debe ingresar el telefono del maestro: `);
        }
        this.correo = readlineSync.question('Por favor ingresa el correo del maestro: ');
        if (!this.correo) {
            throw new Eror(`Debe ingresar el correo del maestro: `);
        }
        this.carrera = readlineSync.question('Por favor ingresa el titulo del maestro: ');
        if (!this.carrera) {
            throw new Eror(`Debe ingresar el titulo del maestro: `);
        }
    }

    imprimirSalario() {
        console.info(`El salario por hora de ${this.nombre} es ${this.salarioPorHora}`);
    } 
  /*   calcularSalario(/* recargomaestria,  Asignatura) {
        let totalRecargo = 0;
        for (let i = 0; i < Asignatura.length; i++) {
            totalRecargo += Asignatura[i].calcularRecargo(this.horas);
        }
        return this.salarioPorHora + totalRecargo;
    } */

   /*  imprimirSalario(recargomaestria, Asignatura) {
        console.info(`El salario por hora de ${this.nombre} es ${this.calcularSalario( ecargomaestria,  Asignatura)}`);
    } */

}

class ProfesorPlanta extends Maestro {
    constructor(nombre, telefono, correo, carrera) {
        super(nombre, telefono, correo, carrera);
        this.salarioPorHora = parseFloat(readlineSync.question('Por favor ingresa el valor de hora del maestro de planta: ')); // Reemplaza X con el valor que desees
    }
}

class ProfesorCatedratico extends Maestro {
    constructor(nombre, telefono, correo, carrera) {
        super(nombre, telefono, correo, carrera);
        this.salarioPorHora = parseFloat(readlineSync.question('Por favor ingresa el valor de hora del maestro catedratico: ')); // Reemplaza Y con el valor que desees
    }
}

class ProfesorCatedraticoAsociado extends ProfesorCatedratico {
    constructor(nombre, telefono, correo, carrera) {
        super(nombre, telefono, correo, carrera);
        this.salarioPorHora = parseFloat(readlineSync.question('Por favor ingresa el valor de hora del maestro de Asociado: ') * 1.07); // Gana un 7% más que el profesor catedrático
        
    }
}

const listaMaestros = [];

let continuar = 's';
//utilizamos el toLowerCase para convertir el texto a minusco y no nos muestre un error 
while (continuar.toLowerCase() == 's') { 
    let profesor;
    const contratoelegido = readlineSync.question(`Que tipo de contrato va a tener el meastro Catedratico(c),Catedratico Asociado(a),Planta(p): `);
    if (contratoelegido == 'c') {
        profesor = new ProfesorCatedratico();
        console.info("El Contrato selecionado es Catedratico");
    } else if (contratoelegido == 'a') {
        profesor = new ProfesorCatedraticoAsociado();
        console.info("El Contrato selecionado es Catedratico Asociado");
    } else if (contratoelegido == 'p') {
        profesor = new ProfesorPlanta();
        console.info("El Contrato selecionado es de planta");
        
    }
     profesor.ingresarDatos();
    listaMaestros.push(profesor);
    continuar = readlineSync.question('¿Deseas ingresar otro maestro? (s/n): ');
    
}

// Imprimir salarios de todos los maestros en la lista
/*  for (let i = 0; i < listaMaestros.length; i++) {
    listaMaestros[i].imprimirSalario( recargomaestria,  Asignatura); 
}   */
 ProfesorPlanta.imprimirSalario();
ProfesorCatedratico.imprimirSalario();
ProfesorCatedraticoAsociado.imprimirSalario();