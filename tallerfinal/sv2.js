const readlineSync = require(`readline-sync`);

class Asignatura
{
    nombreA="";
    horas=0;
    programa="";//contaduria publica , Administracion de empresas, Ingenieria de sistemas,ingenieria seguridad informatica, psicologia
    horario="";//dia o noche

    constructor(nombreA, horas, progrma, horario){
        this.nombreA = nombreA;
        this.horas = horas;
        this.progrma= progrma;
        this.horairo= horario;
    }

}

const asignatura2 = new Asignatura('matematicas', 2000000, 'plata', 3000);
const asignatura3 = new Asignatura('negocios', 30000000, 'dorado', 7000);
const asignatura1 = new Asignatura('', 1000000, 'bronce', 500);
const asignatura4 = new Asignatura(''70000000, 'diamante', 10000);
const asignatura5 = new Asignatura('', 1000000, 'bronce', 500);
const asignatura6 = new Asignatura('', 2000000, 'plata', 3000);
const asignatura7 = new Asignatura('', 30000000, 'dorado', 7000);
const asignatura8 = new Asignatura(''70000000, 'diamante', 10000);


class Maestro
{
    nombre="";
    telefono="";
    correo="";
    carrera="";

    constructor(nombre, telefono, correo, carrera) {
        
        this.nombre = nombre;
        this.telefono = telefono;
        this.correo = correo;
        this.carrera = carrera;
    }
    ingresarDatos() {
        this.nombre = readlineSync.question('Por favor ingresa el nombre del maestro: ');
        this.telefono = readlineSync.question('Por favor ingresa el telefono del maestro: ');
        this.correo = readlineSync.question('Por favor ingresa el correo del maestro: ');
        this.carrera = readlineSync.question('Por favor ingresa la carrera del maestro: ');
    }
}
let listaMaestros = [];

// Crear una nueva instancia de Maestro e ingresar datos
let continuar = 's';
while (continuar.toLowerCase() === 's') {
    let maestro = new Maestro();
    maestro.ingresarDatos();
    listaMaestros.push(maestro);
    continuar = readlineSync.question('¿Deseas ingresar otro maestro? (s/n): ');
}

// Imprimir los datos de los maestros
for (let i = 0; i < listaMaestros.length; i++) {
    console.log(`Maestro ${i+1}: Nombre: ${listaMaestros[i].nombre}, Teléfono: ${listaMaestros[i].telefono}, Correo: ${listaMaestros[i].correo}, Carrera: ${listaMaestros[i].carrera}`);
}


