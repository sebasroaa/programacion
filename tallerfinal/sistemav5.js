const readlineSync = require(`readline-sync`);
const listaPrograma=[];
class Programa {
  #nombrep = ""; 
  
  listaAsignatura = [];

  constructor(nombrep) {
    this.#nombrep = nombrep;
  }
  get nombrep() {
    return this.#nombrep;
}

set nombrep(nuevoPrograma){
    if(!nuevoPrograma){
        throw new Error(`el nombre del programa no puede ser vacio`);
    }
    this.#nombrep = nuevoPrograma;
}
  ingresarProgramas() {
    this.nombrep = readlineSync.question('Por favor ingresa el nombre del programa: ');
    let agregarAsignatura = 's';

while (agregarAsignatura.toLowerCase() === 's') {
  let asignatura = new Asignatura();
  asignatura.ingresarAsignatura();
  listaPrograma.push(asignatura);
  this.listaAsignatura.push(asignatura);
  agregarAsignatura = readlineSync.question('¿Deseas ingresar otra asignatura para este programa? (s/n): ');
}
listaPrograma.push(this);
  }

  anexarasignatura(asignaturaAdicional) {
    this.listaAsignatura.push(asignaturaAdicional);
  }

  adicionarasignaturaprograma(){
    


  }

  imprimirPrograma() {
    console.info(`Nombre del programa: ${this.nombrep}`);
  }
}






class Asignatura {
  nombrea = "";
  numeroHoras = 0;
  listaMaestro=[];
  
  constructor(nombrea, numeroHoras) {
    this.nombrea = nombrea;
    this.numeroHoras = numeroHoras;
  }
  
  ingresarAsignatura() {
    this.nombrea = readlineSync.question('Por favor ingresa el nombre de la asignatura: ');
    this.numeroHoras = parseFloat(readlineSync.question('Por favor ingresa las horas de la asignatura: '));
    let agregarmaestro = 's';
    
    while (agregarmaestro.toLowerCase() === 's') {
      let maestro = new Maestro();
      maestro.ingresarMaestro();
      const contratoelegido = readlineSync.question(`Que tipo de contrato va a tener el meastro Catedratico(c),Catedratico Asociado(a),Planta(p): `);
        const jornadaelegida = readlineSync.question(`Que tipo de jornada va a tener la asignatura Diurna(d) o Nocturna(n): `);
        if(contratoelegido == "p"){
          maestro = new ProfesorPlanta();
            console.info("El Contrato selecionado es de planta");
            console.info(`Pago hora del profesor de planta  es: ${maestro.Pagodextras(jornadaelegida, contratoelegido)}`);
        }else if (contratoelegido == "c"){
          maestro = new ProfesorCatedratico();
            console.info("El Contrato selecionado es de Catedratico");
            console.info(`Pago hora del profesor  catedratico  es: ${maestro.Pagodextras(jornadaelegida, contratoelegido)}`);
        }else if (contratoelegido == "a"){
          maestro = new ProfesorCatedraticoAsociado();
            console.info("El Contrato selecionado es de Catedratico Asociado");
            console.info(`Pago hora del profesor catedratico Asociado es: ${maestro.Pagodextras(jornadaelegida, contratoelegido)}`);
        }    
        this.listaMaestro.push(new Maestro(maestro.nombrem,maestro.identificacion,maestro.telefono,maestro.correo));
      agregarmaestro = readlineSync.question('¿Deseas ingresar otro profesor para esta asignatura? (s/n): ');
    } 
  }

  anexarmaestro(maestroAdicional){
    this.listaMaestro.push(maestroAdicional);
    
  }

  imprimirAsignatura() {
    console.info(`Nombre de la asignatura: ${this.nombrea}`);
    console.info(`Número de horas: ${this.numeroHoras}`);
  }
}

function ingresarPrograma() {
  let nuevoPrograma = new Programa();
  nuevoPrograma.ingresarProgramas();
}
/* let agregar= "s"
while(agregar.toLowerCase()=== "s"){

  let asignatura = new Asignatura();
  asignatura.ingresarAsignatura();
  const nombreAsignatura= readlineSync.question(`Desea buscar un programa y agregarle otra asignatura`);
  let indicaprograma =-1;
  for(let i =0; i<ListaPrograma.length; i++){
    if(ListaPrograma[i].nombrep == nombreAsignatura){
      indicaprograma=i;
    }
   
  }
  if(indicaprograma == -1){
    throw new Error(`El programa no existe`)
  }
  ListaPrograma[indicaprograma].anexarasignatura(asignatura);
  agregara = readlineSync.question('¿Deseas ingresar otra asignatura? (s/n): ');
} */


class Maestro{

  #nombrem="";
  #identificacion="";
  telefono = "";
  correo = "";
  #carrera = "";
   horario="";

  constructor(nombrem,identificacion,telefono, correo, carrera){
  
    this.#identificacion=identificacion;

    this.#nombrem = nombrem;
    this.telefono = telefono;
    this.correo = correo;
    this.#carrera = carrera;

}
get identificacion() {
  return this.#identificacion;
}
set identificacion(nuevaIdentificacion){
  if(!nuevaIdentificacion < 0){
    throw new Error(`la identificacion del maestro no puede ser un numero negativo`);
}
  this.#identificacion = nuevaIdentificacion;
}

get nombrem() {
  return this.#nombrem;
}
set nombrem(nuevoNombrem){
  if(!nuevoNombrem){
      throw new Error(`el masestro requiere un nombre`);
  }
  this.#nombrem = nuevoNombrem;
}
get carrera() {
  return this.#carrera;
}
set carrera(nuevaCarrera){
  if(!nuevaCarrera){
    throw new Error(`El maestro requiere un titulo`);
}
  this.#carrera = nuevaCarrera;
}


  ingresarMaestro(){
    
    this.nombrem = readlineSync.question('Por favor ingresa el nombre del maestro: ');
   
    this.identificacion=readlineSync.question(`Por favor ingrese la identificacion del maestro: `);
   
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
  /*   let agregarm = 's';
    
    while (agregarm.toLowerCase() === 's') {
      let maestro = new Maestro(this.nombrem,this.identificacion);
      maestro.ingresarMaestro();
      ListaPrograma[0].listaAsignatura[0].anexarmaestro(maestro);
      agregarm = readlineSync.question('¿Deseas ingresar otra asignatura? (s/n): ');
      
    } */
  }
}  




class TipoProfesor extends Maestro{
  tipoprofesor ="";
  constructor(nombrem, telefono, correo, carrera,tipoprofesor) {
      super(nombrem, telefono, correo, carrera);
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
  constructor(nombrem, telefono, correo, carrera) {
      super(nombrem, telefono, correo, carrera,"p")

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
  constructor(nombrem, telefono, correo, carrera) {
      super(nombrem, telefono, correo, carrera,"c")

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
  constructor(nombrem, telefono, correo, carrera) {
      super(nombrem, telefono, correo, carrera,"a")

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
    
    


    function obtenerCostoPorPrograma() {
      let nombrePrograma = readlineSync.question('Ingrese el nombre del programa para calcular su costo de nómina: ');
      if (nombrePrograma) {
          let costoTotalNominaPrograma = 0;
          for (let i = 0; i < listaPrograma.length; i++) {
              let programa = listaPrograma[i];
              if (programa.nombrep.toLowerCase() === nombrePrograma.toLowerCase()) {
                  for (let j = 0; j < programa.listaAsignatura.length; j++) {
                      let asignatura = programa.listaAsignatura[j];
                      for (let k = 0; k < asignatura.listaMaestro.length; k++) {
                          let maestro = asignatura.listaMaestro[k];
                          costoTotalNominaPrograma += maestro.Pagodextras(asignatura.numeroHoras, maestro.tipoContrato, maestro.jornada);
                      }
                  }
                  break; 
              }
          }
          console.log(`El costo total de la nómina del programa ${nombrePrograma} es: $${costoTotalNominaPrograma.toFixed(2)}`);
      } else {
          console.log("Debe ingresar un nombre de programa válido.");
      }
  }
  function mostrarListadoProgramas() {
    console.info("\nListado de programas:");
    for (let i = 0; i < listaPrograma.length; i++) {
        console.info(`${i + 1}. ${listaPrograma[i].nombrep}`);
    }
}

function seleccionarProfesor() {
  let nombreProfesor = readlineSync.question('Ingrese el nombre del profesor: ');
  let datosProfesor = obtenerDatosProfesor(nombreProfesor);
  console.log(`Total a pagar al profesor ${nombreProfesor}: $${datosProfesor.nuevovalor.toFixed(2)}`);
  console.log(`Horas extras diurnas: ${datosProfesor.Pagodextras}`);

}
function mostrarMenu() {
  console.info("\nMenú:");
  console.info("1. Ingresar programa");
  console.info("2. Obtener costo total de la nómina de la universidad");
  console.info("3. Obtener costo por programa");
  console.info("4. Mostrar listado de programas");
  console.info("5. Obtener promedio del costo de los profesores que dan clases");
  console.info("6. Costo por profesor");
  console.info("7. Mostrar listado de profesores");
  console.info("8. Calcular pago a los profesores de planta");
  console.info("9. Calcular pago a los profesores catedráticos");
  console.info("10. Contar profesores con maestría");
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
              console.info("Saliendo del programa...");
              break;
          default:
              console.info("Opción inválida. Por favor ingrese una opción válida.");
              break;
      }
  } while (opcion !== 11);
}

iniciar();