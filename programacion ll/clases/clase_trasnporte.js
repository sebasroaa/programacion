const readlineSync = require(`readline-sync`);

class Vehiculo {
    constructor(placa, modelo, capacidad, tipoCombustible, kilometraje) {
        this.placa = placa;
        this.modelo = modelo;
        this.capacidad = capacidad;
        this.tipoCombustible = tipoCombustible;
        this.kilometraje = kilometraje;
    }
}


const vehiculo1 = new Vehiculo
(`KIL674`, `2016`, `15`, `GASOLINA`, 15000);
const vehiculo2 = new Vehiculo
('ABC123', '2017', `12`, 'DIESEL', 20000);
const vehiculo3 = new Vehiculo
('XYZ890', '2015', `10`, 'GASOLINA', 30000);
const vehiculo4 = new Vehiculo
('LMN456', '2018', `8`, 'HIBRIDO', 40000);
const vehiculo5 = new Vehiculo
('GHI789', '2019', `5`, 'ELECTRICO', 50000);
const vehiculo6 = new Vehiculo
('DEF456', '2020',`4`, 'GASOLINA', 60000);
const vehiculo7 = new Vehiculo
('DEF456', '2020', `4`, 'GASOLINA', 60000);
const vehiculo8 = new Vehiculo
('JKL012', '2021', `16`, 'DIESEL', 70000);
const vehiculo9 = new Vehiculo
('QRS678', '2014', `14`, 'GASOLINA', 80000);
const vehiculo10 = new Vehiculo
('TUV234', '2013', `20`, 'DIESEL', 90000);
const vehiculo11 = new Vehiculo
('WXY567', '2012', `30`, 'GASOLINA', 100000);
const vehiculo12 = new Vehiculo
('OPQ345', '2011', `25`, 'HIBRIDO', 110000);
const vehiculo13 = new Vehiculo
('MNO678', '2010', `40`, 'ELECTRICO', 120000);
const vehiculo14 = new Vehiculo
('PQR789', '2009', `35`, 'GASOLINA', 130000);
const vehiculo15 = new Vehiculo
('STU901', '2008', `45`, 'DIESEL', 140000);
//variables donde toma que tipo de combustible 
const combustible = `ELECTRICO`;
let cantidad =[];
let buseselectricos = vehiculo1;
if(vehiculo1.tipoCombustible == combustible){
    buseselectricos = vehiculo1;
}
if(vehiculo2.tipoCombustible == combustible){
    buseselectricos = vehiculo2;
}
if(vehiculo3.tipoCombustible == combustible){
    buseselectricos = vehiculo3;
}
if(vehiculo4.tipoCombustible == combustible){
    buseselectricos = vehiculo4;
}
if(vehiculo5.tipoCombustible == combustible){
    buseselectricos = vehiculo5;
    cantidad++;
}
if(vehiculo6.tipoCombustible == combustible){
    buseselectricos = vehiculo6;
}
if(vehiculo7.tipoCombustible == combustible){
    buseselectricos = vehiculo7;
}
if(vehiculo8.tipoCombustible == combustible){
    buseselectricos = vehiculo8;
}
if(vehiculo9.tipoCombustible == combustible){
    buseselectricos = vehiculo9;
}
if(vehiculo10.tipoCombustible == combustible){
    buseselectricos = vehiculo10;
}
if(vehiculo11.tipoCombustible == combustible){
    buseselectricos = vehiculo11;
}
if(vehiculo12.tipoCombustible == combustible){
    buseselectricos = vehiculo12;
}
if(vehiculo13.tipoCombustible == combustible){
    buseselectricos = vehiculo13;
    cantidad++;
}
if(vehiculo14.tipoCombustible == combustible){
    buseselectricos = vehiculo14;
}
if(vehiculo15.tipoCombustible == combustible){
    buseselectricos = vehiculo15;
}
console.info(`hoy no puenden viajar: `+buseselectricos.placa);
console.info(`hoy no puenden viajar: `+cantidad);

class Conductor {
    constructor(nombre, licencia, experiencia, edad, vehiculoAsignado) {
        this.nombre = nombre;
        this.licencia = licencia;
        this.experiencia = experiencia;
        this.edad = edad;
        this.vehiculoAsignado = vehiculoAsignado;
    }
}

const Conductor1 = new Conductor (`SEBASTIAN ROA`, `A2`, `5 MESES`, `24`,  vehiculo1);
const Conductor2 = new Conductor(`JUAN MANUEL`,`B2`, `2 AÑOS`, `32` , vehiculo2)
const Conductor3 = new Conductor('ANDRES', 'B1', '3 AÑOS', `28`, vehiculo3);
const Conductor4 = new Conductor('LUIS ALVERTO', 'C1', '4 AÑOS', `30`, vehiculo4);
const Conductor5 = new Conductor('cARLOS MARIO', 'A2', '1 AÑO', `23`, vehiculo5);
const Conductor6 = new Conductor('JORGE MARIO', 'C2', '5 AÑOS', `36`, vehiculo6);
const Conductor7 = new Conductor('CONRADO', 'C1', '8 AÑOS', `29`, vehiculo7);
const Conductor8 = new Conductor('HUMBERTO', 'B2', '9 MESES', `28`, vehiculo8);
const Conductor9 = new Conductor('ALFONSO', 'A2', '3 AÑOS', `26`, vehiculo9);
const Conductor10 = new Conductor('DIEGO', 'C3', '10 AÑOS', `35`, vehiculo10);
const Conductor11 = new Conductor (`SEBASTIAN ROA`, `A2`, `5 MESES`, `24`,  vehiculo11);
const Conductor12 = new Conductor(`JUAN MANUEL`,`B2`, `2 AÑOS`, `32` , vehiculo12)
const Conductor13 = new Conductor('ANDRES', 'B1', '3 AÑOS', `28`, vehiculo13);
const Conductor14 = new Conductor('LUIS ALVERTO', 'C1', '4 AÑOS', `30`, vehiculo14);
const Conductor15 = new Conductor('cARLOS MARIO', 'A2', '1 AÑO', `23`, vehiculo15);

let conductores = [Conductor1, Conductor2, Conductor3, Conductor4, Conductor5, Conductor6, Conductor7, Conductor8, Conductor9, Conductor10, Conductor11, Conductor12, Conductor13, Conductor14, Conductor15];
for(let i = 0; i < conductores.length; i++) {
    if(conductores[i].edad > 30) {
        console.info(conductores[i].nombre + " debe descansar los fines de semana.");
       }
}

class Ruta {
    constructor(origen, destino, valor, tiempoEstimado, vehiculos) {
        this.origen = origen;
        this.destino = destino;
        this.valor = valor;
        this.tiempoEstimado = tiempoEstimado;
        this.vehiculos = vehiculos;
    }
}

const ruta1 = new Ruta (`MANIZALES`, `BOGOTA`, `55000`, 10,  vehiculo1);
const ruta2 = new Ruta(`PEREIRA`,`BARRANQUILLA`, `108000`, 32 , vehiculo2)
const ruta3 = new Ruta('MEDELLIN', 'CARTAGENA', '70000', 28, vehiculo3);
const ruta4 = new Ruta('CALI', 'MANIZALES', '22000', 6, vehiculo4);
const ruta5 = new Ruta('CARTAGENA', 'PEREIRA', '98000', 23, vehiculo5);
const ruta6 = new Ruta('BARRANQUILLA', 'MEDELLIN', '200000', 36, vehiculo6);
const ruta7 = new Ruta('BOGOTA', 'CALI', '40000', 29, vehiculo7);
const ruta8 = new Ruta('MANIZALES', 'PEREIRA', '18000', 28, vehiculo8);
const ruta9 = new Ruta('MEDELLIN', 'CALI', '55000', 9, vehiculo9);
const ruta10 = new Ruta('BARRANQUILLA', 'BOGOTA', '90000', 35, vehiculo10);
const ruta11 = new Ruta (`CARTAGENA`, `PASTO`, `32000`, 24,  vehiculo11);
const ruta12 = new Ruta(`NEIVA`,`CUCUTA`, `28000`, 32 , vehiculo12)
const ruta13 = new Ruta('AMAZONAS', 'GUAJIRA', '500000', 28, vehiculo13);
const ruta14 = new Ruta('FILANDIA', 'MANIZALES', '36000', 2, vehiculo14);
const ruta15 = new Ruta('CUCUTA', 'BOGOTA', '69000', 10, vehiculo15);

let rutaMaslejos = ruta1;
if(ruta2.tiempoEstimado > rutaMaslejos.tiempoEstimado){
    rutaMaslejos = ruta2;
}
if(ruta3.tiempoEstimado > rutaMaslejos.tiempoEstimado){
    rutaMaslejos = ruta3;
}
if(ruta4.tiempoEstimado > rutaMaslejos.tiempoEstimado){
    rutaMaslejos = ruta4;
}
if(ruta5.tiempoEstimado > rutaMaslejos.tiempoEstimado){
    rutaMaslejos = ruta5;
}
if(ruta6.tiempoEstimado > rutaMaslejos.tiempoEstimado){
    rutaMaslejos = ruta6;
}
if(ruta7.tiempoEstimado > rutaMaslejos.tiempoEstimado){
    rutaMaslejos = ruta7;
}
if(ruta8.tiempoEstimado > rutaMaslejos.tiempoEstimado){
    rutaMaslejos = ruta8;
}
if(ruta9.tiempoEstimado > rutaMaslejos.tiempoEstimado){
    rutaMaslejos = ruta9;
}
if(ruta10.tiempoEstimado > rutaMaslejos.tiempoEstimado){
    rutaMaslejos = ruta10;
}
if(ruta11.tiempoEstimado > rutaMaslejos.tiempoEstimado){
    rutaMaslejos = ruta11;
}
if(ruta12.tiempoEstimado > rutaMaslejos.tiempoEstimado){
    rutaMaslejos = ruta12;
}
if(ruta13.tiempoEstimado > rutaMaslejos.tiempoEstimado){
    rutaMaslejos = ruta13;
}
if(ruta14.tiempoEstimado > rutaMaslejos.tiempoEstimado){
    rutaMaslejos = ruta14;
}
if(ruta15.tiempoEstimado > rutaMaslejos.tiempoEstimado){
    rutaMaslejos = ruta15;
}
console.info(`EL VIAJE MAS LARGO DURA `+rutaMaslejos.tiempoEstimado, `HORAS`);
console.info(`EL DESTINO MAS LARGO ES `+rutaMaslejos.destino);

class Cliente {
    constructor(nombre, direccion, telefono, email, rutas, tiquetesacumulados) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
        this.rutas = rutas;
        this.tiquetesacumulados = tiquetesacumulados;
    }
}

const cliente1 = new Cliente (`SEBASTIAN ROA`, `CR12#A2`, `3122163727`, `PRUEBAS@GMAIL.COM`, ruta1, 10);
const cliente2 = new Cliente (`JUAN MANUEL`, `CR12#A2`, `3122163727`, `PRUEBAS@GMAIL.COM`, ruta2, 2);
const cliente3 = new Cliente (`LUIS FERNANDO`, `CR12#A2`, `3122163727`, `PRUEBAS@GMAIL.COM`, ruta3, 20);
const cliente4 = new Cliente (`MARIO`, `CR12#A2`, `3122163727`, `PRUEBAS@GMAIL.COM`, ruta4, 3);
const cliente5 = new Cliente (`CARLOS`, `CR12#A2`, `3122163727`, `PRUEBAS@GMAIL.COM`, ruta5,13);
const cliente6 = new Cliente (`JUAN ANTONIO`, `CR12#A2`, `3122163727`, `PRUEBAS@GMAIL.COM`, ruta6, 6);
const cliente7 = new Cliente (`FELIPE`, `CR12#A2`, `3122163727`, `PRUEBAS@GMAIL.COM`, ruta7, 7);
const cliente8 = new Cliente (`SEBASTIAN`, `CR12#A2`, `3122163727`, `PRUEBAS@GMAIL.COM`, ruta8, 4);
const cliente9 = new Cliente (`FERNANDO`, `CR12#A2`, `3122163727`, `PRUEBAS@GMAIL.COM`, ruta9, 10);
const cliente10 = new Cliente (`ANTONIO`, `CR12#A2`, `3122163727`, `PRUEBAS@GMAIL.COM`, ruta10, 11);
const cliente11 = new Cliente (`PEDRO`, `CR12#A2`, `3122163727`, `PRUEBAS@GMAIL.COM`, ruta11, 1);
const cliente12 = new Cliente (`MARIA`, `CR12#A2`, `3122163727`, `PRUEBAS@GMAIL.COM`, ruta12, 22);
const cliente13 = new Cliente (`LUZ MANRINA`, `CR12#A2`, `3122163727`, `PRUEBAS@GMAIL.COM`, ruta13, 5);
const cliente14 = new Cliente (`LUISA FERNANDA`, `CR12#A2`, `3122163727`, `PRUEBAS@GMAIL.COM`, ruta14, 17);
const cliente15 = new Cliente (`GLORIA SUSANA `, `CR12#A2`, `3122163727`, `PRUEBAS@GMAIL.COM`, ruta15, 1 );

let pmastiquetes = cliente1;
if(cliente2.tiquetesacumulados > pmastiquetes.tiquetesacumulados){
    pmastiquetes = cliente2;
}
if(cliente3.tiquetesacumulados > pmastiquetes.tiquetesacumulados){
    pmastiquetes = cliente3;
}
if(cliente4.tiquetesacumulados > pmastiquetes.tiquetesacumulados){
    pmastiquetes = cliente4;;
}
if(cliente5.tiquetesacumulados > pmastiquetes.tiquetesacumulados){
    pmastiquetes = cliente5;
}
if(cliente6.tiquetesacumulados > pmastiquetes.tiquetesacumulados){
    pmastiquetes = cliente6;
}
if(cliente7.tiquetesacumulados > pmastiquetes.tiquetesacumulados){
    pmastiquetes = cliente7;
}
if(cliente8.tiquetesacumulados > pmastiquetes.tiquetesacumulados){
    pmastiquetes = cliente8;
}
if(cliente9.tiquetesacumulados > pmastiquetes.tiquetesacumulados){
    pmastiquetes = cliente9;
}
if(cliente10.tiquetesacumulados > pmastiquetes.tiquetesacumulados){
    pmastiquetes = cliente10;
}
if(cliente11.tiquetesacumulados > pmastiquetes.tiquetesacumulados){
    pmastiquetes = cliente11;
}
if(cliente12.tiquetesacumulados > pmastiquetes.tiquetesacumulados){
    pmastiquetes = cliente12;
}
if(cliente13.tiquetesacumulados > pmastiquetes.tiquetesacumulados){
    pmastiquetes = cliente13;
}
if(cliente14.tiquetesacumulados > pmastiquetes.tiquetesacumulados){
    pmastiquetes = cliente14;
}
if(cliente15.tiquetesacumulados > pmastiquetes.tiquetesacumulados){
    pmastiquetes = cliente15;
}

console.info(`El pasajero con mas tiquetes es: `+pmastiquetes.nombre );