const readlineSync = require(`readline-sync`);

class Maestro
{
    nombre="";
    telefono="";
    correo="";
    carrera="";
    contrato= null;
    salarioPorHora = 0;

    constructor(nombre, telefono, correo, carrera) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.correo = correo;
        this.carrera = carrera;
    }
    ingresarDatos() {
        this.nombre = readlineSync.question('Por favor ingresa el nombredel maestro: ');
        if (!this.nombre){
            throw new Eror(`Debe ingresar el nombre: `);
         }
        this.telefono = readlineSync.question('Por favor ingresa el telefono del maestro: ');
        if (!this.telefono){
            throw new Eror(`Debe ingresar el telefono del maestro: `);
         }
        this.correo = readlineSync.question('Por favor ingresa el correo del maestro: ');
        if (!this.correo){
            throw new Eror(`Debe ingresar el correo del maestro: `);
         }
        this.carrera = readlineSync.question('Por favor ingresa el titulo del maestro: ');
        if (!this.carrera){
            throw new Eror(`Debe ingresar el titulo del maestro: `);
         }
    }
    imprimirSalario() {
        console.info(`El salario por hora de ${this.nombre} es ${this.salarioPorHora}`);
    }
   
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
        this.salarioPorHora =parseFloat(readlineSync.question('Por favor ingresa el valor de hora del maestro de Asociado: ')* 1.07 ); // Gana un 7% más que el profesor catedrático
    }
    costototalplanta(){
        let costoTotal = 0;
        for (let i = 0; i < listaMaestros.length; i++) {
            if (listaMaestros[i] instanceof ProfesorPlanta) {
                costoTotal += listaMaestros[i].salarioPorHora * listaMaestros[i].horas;
            }
        }
        return costoTotal;
    }
    
}

const listaMaestros=[];

let continuar = 's';
while (continuar.toLowerCase() == 's') {
    let profesor;
    const contratoelegido = readlineSync.question(`Que tipo de contrato va a tener el meastro Catedratico(c),Catedratico Asociado(a),Planta(p): `);
    if(contratoelegido == 'c'){
        profesor = new ProfesorCatedratico();
        console.info("El Contrato selecionado es Catedratico");
    }
    else if(contratoelegido == 'a'){
        profesor = new ProfesorCatedraticoAsociado();
        console.info("El Contrato selecionado es Catedratico Asociado");
    }
    else if(contratoelegido == 'p'){
        profesor = new ProfesorPlanta();
        console.info("El Contrato selecionado es de planta");
    }
    profesor.ingresarDatos();
    listaMaestros.push(profesor);
    continuar = readlineSync.question('¿Deseas ingresar otro maestro? (s/n): ');
}

// Imprimir salarios de todos los maestros en la lista
for (let i = 0; i < listaMaestros.length; i++) {
    listaMaestros[i].imprimirSalario();
}
class Asignatura
{
    nombreA="";
    horas=0;
    programa="";//contaduria publica , Administracion de empresas, Ingenieria de sistemas,ingenieria seguridad informatica, psicologia
    horario="";//dia o noche
    requiereMaestria= false

    constructor(nombreA, horas, programa, horario){
        this.nombreA = nombreA;
        this.horas = horas;
        this.programa= programa;
        this.horario= horario;
        this.requiereMaestria = false;
        
    }
    ingresarAsignatura() {
        this.nombreA = readlineSync.question('Por favor ingresa el nombre de la asignatura: ');
        this.horas = parseFloat(readlineSync.question('Por favor ingresa las horas de la asignatura: '));
        this.programa = readlineSync.question('Por favor ingresa el nombre de la facultad: ');
        const jornadaelegida = readlineSync.question(`Que tipo de jornada va a tener la asignatura Diurna(d) o Nocturna(n): `);
         if(jornadaelegida == 'd'){
            console.info("La jornada selecionada es diurna ");
         }
         else if(jornadaelegida == 'n'){
            console.info("La jornada selecionada es nocturna");
         }
         else{
            console.info("No seleciono ninguna opcion")
         }
    }

    

}

let listaAsignatura = [];

// Crear una nueva instancia de Asignatura e ingresar datos
let agregar = 's';
while (agregar.toLowerCase() == 's') {
    let asignatura = new Asignatura();
    asignatura.ingresarAsignatura();
    let maestria = readlineSync.question('La asignatura requiere maestria? (s/n): ');
    asignatura.requiereMaestria = (maestria.toLowerCase() === 's');
    listaAsignatura.push(asignatura);
    agregar = readlineSync.question('¿Deseas ingresar otra asignatura? (s/n): ');
}

profesorPlanta.imprimirSalario();
profesorCatedratico.imprimirSalario();
profesorCatedraticoAsociado.imprimirSalario();

let costoTotalNomina = 0;
for (let i = 0; i < listaMaestros.length; i++) {
    costoTotalNomina += listaMaestros[i].salarioPorHora * listaMaestros[i].horas;
}
console.log(`El costo total de la nómina de toda la universidad es: ${costoTotalNomina}`);


console.log(`El costo total de los profesores de planta es: ${costoTotalProfesoresPlanta()}`);