const readlineSync = require(`readline-sync`);

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
            throw new Eror(`Debe ingresar el titul del maestro: `);
         }
        }
        Ingresarcontrato(){
            const tipoContrato= readlineSync(`Que tipo de contrato va a tener el meastro Catedratico(c),Catedratico Asociado(a),Planta(p): `);
            
    }

    calcularSalario(asignaturas) {
        let salarioTotal = 0;

        for (let asignatura of asignaturas) {
            let salarioHora = 0;

            if (this.tipo === "planta") {
                salarioHora = 60;
            } else if (this.tipo === "catedratico") {
                salarioHora = 20;
            } else if (this.tipo === "catedratico asociado") {
                salarioHora = 20 * 1.07; 
            }

            let recargo = 0;
            if (asignatura.requiereMaestria) {
                if (asignatura.horario === "Día") {
                    recargo = 3;
                } else if (asignatura.horario === "Noche") {
                    recargo = 4 * 0.5;
                }
            }

            let salarioAsignatura = salarioHora * asignatura.horas * (1 + recargo / 100);
            salarioTotal += salarioAsignatura;
        }

        return salarioTotal;
    }
}
let listaMaestros = [];

class MaestroPlanta extends Maestro{
    sueldo=15
    constructor(nombre, telefono, correo, carrera){
        super(nombre, telefono, correo, carrera,`Planta`)
    }
    /* ajustarSueldo(){
        const NuevoSueldo=

    } */
}

// Crear una nueva instancia de Maestro e ingresar datos
let continuar = 's';
while (continuar.toLowerCase() == 's') {
    let profesor = new Maestro();
    profesor.ingresarDatos();
    listaMaestros.push(profesor);
    continuar = readlineSync.question('¿Deseas ingresar otro maestro? (s/n): ');
}

// Imprimir los datos de los maestros
for (let i = 0; i < listaMaestros.length; i++) {
    console.log(`Maestro ${i+1}: Nombre: ${listaMaestros[i].nombre}, Teléfono: ${listaMaestros[i].telefono}, Correo: ${listaMaestros[i].correo}, Carrera: ${listaMaestros[i].carrera}`);
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
        this.horario = readlineSync.question('Por favor ingresa el turno de la materia (Día/Noche): ');
    }

    

}

let listaAsignatura = [];

// Crear una nueva instancia de Maestro e ingresar datos
let agregar = 's';
while (agregar.toLowerCase() == 's') {
    let asignatura = new Asignatura();
    asignatura.ingresarAsignatura();
    let maestria = readlineSync.question('La asignatura requiere maestría? (s/n): ');
    asignatura.requiereMaestria = (maestria.toLowerCase() === 's');
    listaAsignatura.push(asignatura);
    agregar = readlineSync.question('¿Deseas ingresar otra asignatura? (s/n): ');
}

for (let maestro of listaMaestros) {
    let salarioMaestro = maestro.calcularSalario(listaAsignatura);
    console.log(`El salario total para el maestro ${maestro.nombre} es: $${salarioMaestro.toFixed(2)}`);
}