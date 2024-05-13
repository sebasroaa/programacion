const readlineSync = require(`readline-sync`);
class programa{
    nombrep = ""; //contaduria publica , Administracion de empresas, Ingenieria de sistemas,ingenieria seguridad informatica, psicologia

    listaAsignatura = [];
    


    constructor(nombrep){
        this.nombrep=nombrep;
    }
}

class Asignatura
{
    nombreA="";
    horas=0;
        requiereMaestria= false
    profesor=null;
    

    constructor(nombreA, horas, programa, horario,profesor){
        this.nombreA = nombreA;
        this.horas = horas;
        this.programa= programa;
        this.horario= horario;
        this.requiereMaestria = false;
        this.profesor;
        
    }
    ingresarAsignatura() {
        this.nombreA = readlineSync.question('Por favor ingresa el nombre de la asignatura: ');
        this.horas = parseFloat(readlineSync.question('Por favor ingresa las horas de la asignatura: '));
        this.programa = readlineSync.question('Por favor ingresa el nombre de la facultad: ');
       
    }
    
    
}
/* let listaAsignatura = [];
let agregar = 's';
while (agregar.toLowerCase() == 's') {
    let asignatura = new Asignatura();
    asignatura.ingresarAsignatura();
    let maestria = readlineSync.question('La asignatura requiere maestria? (s/n): ');
    asignatura.requiereMaestria = (maestria.toLowerCase() === 's');
    listaAsignatura.push(asignatura);
    agregar = readlineSync.question('¿Deseas ingresar otra asignatura? (s/n): ');
} */
class Maestro {
    #nombre = "";
    telefono = "";
    correo = "";
    carrera = "";
    horario="";//dia o noche
    
    constructor(nombre, telefono, correo, carrera) {
        this.#nombre = nombre;
        this.telefono = telefono;
        this.correo = correo;
        this.carrera = carrera;
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(nombre){
        this.#nombre=nombre
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
      /*   const jornadaelegida = readlineSync.question(`Que tipo de jornada va a tener la asignatura Diurna(d) o Nocturna(n): `);
        if(jornadaelegida == "d"){
           console.info("La jornada selecionada es diurna ");
        }
        else if(jornadaelegida == 'n'){
           console.info("La jornada selecionada es nocturna");
        }
        else{
           console.info("No seleciono ninguna opcion")
        } */
    }
   
}
class TipoProfesor extends Maestro{
    tipoprofesor ="";
    constructor(nombre, telefono, correo, carrera,tipoprofesor) {
        super(nombre, telefono, correo, carrera);
        if(!tipoprofesor){
            throw new Error("El tipo de contrato no esta en la lista");
        }
        this.tipoprofesor=tipoprofesor;
        }
        salarioPorHora(){}
        Pagodextras(){}
}


class ProfesorPlanta extends TipoProfesor {
    horaplanta=10000;
    constructor(nombre, telefono, correo, carrera) {
        super(nombre, telefono, correo, carrera,"p")

         }
         salarioPorHora(){
            const nuevovalor = this.horaplanta;
            return nuevovalor;
        }
        Pagodextras(jornadaelegida, contratoelegido){
            if(jornadaelegida == "d" && contratoelegido == "p" ){
                const nuevovalor= this.salarioPorHora() + (Number(this.salarioPorHora()) * 0.05)
                return nuevovalor;
    
            }if (jornadaelegida == "n" && contratoelegido == "p"){
                const nuevovalor= this.salarioPorHora() + (Number(this.salarioPorHora()) * 0.10)
                return nuevovalor;
            }
        }
}

class ProfesorCatedratico extends TipoProfesor {
    horacatedratico=8000;
    constructor(nombre, telefono, correo, carrera) {
        super(nombre, telefono, correo, carrera,"c")

         }
         salarioPorHora(){
            const nuevovalor = this.horacatedratico;
            return nuevovalor;
        }
        Pagodextras(jornadaelegida, contratoelegido){
            if(jornadaelegida == "d" && contratoelegido == "c" ){
                const nuevovalor= this.salarioPorHora() + (Number(this.salarioPorHora()) * 0.05)
                return nuevovalor;
    
            }if (jornadaelegida == "n" && contratoelegido == "c"){
                const nuevovalor= this.salarioPorHora() + (Number(this.salarioPorHora()) * 0.10)
                return nuevovalor;
            }
        }
}

class ProfesorCatedraticoAsociado extends TipoProfesor {
    horacatedratico=8000;
    constructor(nombre, telefono, correo, carrera) {
        super(nombre, telefono, correo, carrera,"a")

         }
         salarioPorHora(){
            const nuevovalor = this.horacatedratico + (Number(this.horacatedratico * 0.07));
            return nuevovalor;
        }
        Pagodextras(jornadaelegida, contratoelegido){
            if(jornadaelegida == "d" && contratoelegido == "a" ){
                const nuevovalor= this.salarioPorHora() + (Number(this.salarioPorHora()) * 0.05)
                return nuevovalor;
    
            }if (jornadaelegida == "n" && contratoelegido == "a"){
                const nuevovalor= this.salarioPorHora() + (Number(this.salarioPorHora()) * 0.10)
                return nuevovalor;
            }
        }
}

const listaMaestros=[];

let continuar = 's';

while (continuar.toLowerCase() == 's') {
    let profesor;
    const contratoelegido = readlineSync.question(`Que tipo de contrato va a tener el meastro Catedratico(c),Catedratico Asociado(a),Planta(p): `);
    const jornadaelegida = readlineSync.question(`Que tipo de jornada va a tener la asignatura Diurna(d) o Nocturna(n): `);
    if(contratoelegido == "p"){
        profesor = new ProfesorPlanta();
        console.info("El Contrato selecionado es de planta");
        console.info(`Pago hora del profesor de planta  es: ${profesor.Pagodextras(jornadaelegida, contratoelegido)}`);
    }else if (contratoelegido == "c"){
        profesor = new ProfesorCatedratico();
        console.info("El Contrato selecionado es de Catedratico");
        console.info(`Pago hora del profesor  catedratico  es: ${profesor.Pagodextras(jornadaelegida, contratoelegido)}`);
    }else if (contratoelegido == "a"){
        profesor = new ProfesorCatedraticoAsociado();
        console.info("El Contrato selecionado es de Catedratico Asociado");
        console.info(`Pago hora del profesor catedratico Asociado es: ${profesor.Pagodextras(jornadaelegida, contratoelegido)}`);
    }    
    profesor.ingresarDatos();
    listaMaestros.push(profesor);
    continuar = readlineSync.question('¿Deseas ingresar otro maestro? (s/n): ');
}

for(let i = 0; i < listaMaestros.length; i++) {
    let profesor = listaMaestros[i];
    console.log(`Nombre: ${profesor.nombre}, Salario por hora: ${profesor.salarioPorHora()}`);
   
}
