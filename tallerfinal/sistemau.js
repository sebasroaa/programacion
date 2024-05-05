const readlineSync = require(`readline-sync`);

class Maestro
{
    nombre="";
    telefono="";
    correo="";
    carrera="";

    constructor(nombre, telefono, correo, carrera) {
        if(nombre ){
            throw new Error(`El nombre del mestro no puede ser vacio`);
        }
        if(telefono){
            throw new Error(`El telefono del mestro no puede ser vacio`);
        }
        if(correo){
            throw new Error(`El correo del mestro no puede ser vacio`);
        }
        if(carrera){
            throw new Error(`La profecion del mestro no puede ser vacio`);
        }
        this.nombre = nombre;
        this.telefono = telefono;
        this.correo = correo;
        this.carrera = carrera;
    }
    ingresarDatos() {
        this.nombre = readlineSync.question('Por favor ingresa el nombre: ');
        this.telefono = readlineSync.question('Por favor ingresa el teléfono: ');
        this.correo = readlineSync.question('Por favor ingresa el correo: ');
        this.carrera = readlineSync.question('Por favor ingresa la carrera: ');
    }
}
// Crear una lista para guardar las instancias de Maestro
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


