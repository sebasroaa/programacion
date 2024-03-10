const readlineSync = require('readline-sync');

let cantidadmaletas = 0;
let pesototal = 0;
let totaldescuento = 0;
let destinoMasDespachado = '';
let cantidadMaximaDespachada = 0;

function agregarvuelo() {
    let origen;
    let destino;
    let maleta;
    let contadorman = 0;
    let maletaman = 0;
    let contadorper = 0;
    let maletaper = 0;
    let contadormed = 0;
    let maletamed = 0;
    let contadorcal = 0;
    let maletacal = 0;
    let contadorsan = 0;
    let maletasan = 0;
    let contadorbarr = 0;
    let maletabarr = 0;
    let contadorbog = 0;
    let maletabog = 0;
    let contadorfemenino = 0;
    let contadormasculino = 0;

    const pesoMaximo = 25;
    const pesoNormal = 23;
    const costoBase = 30000;

    do {
        origen = readlineSync.question(`Ingrese el origen de la maleta: `);

        if (origen == `manizales`){
            console.info(`El origen de la maleta es: ` + origen);
        }else if (origen == `pereira`){
            console.info(`El origen de la maleta es: `+ origen);
        }else if (origen == `medellin`){
            console.info(`El origen de la maleta es: ` + origen);
        }else if (origen == `cali`){
            console.info(`El origen de la maleta es: ` + origen);
        }else if (origen == `san andres`){
            console.info(`El origen de la maleta es: ` + origen);
        }else if (origen == `barranquilla`){
            console.info(`El origen de la maleta es: ` + origen);
        }else if (origen == `bogota`){
            console.info(`El origen de la maleta es: ` + origen);
        }
        else{
            console.error(`La ciudad no es en los planes de vuelo`)
        }

        destino = readlineSync.question(`Ingrese el destino de la maleta: `);

        if (destino === 'manizales') {
            contadorman++;
            maletaman = maletaman + maleta;
            console.info(`El destino del vuelo de la maleta es: `+ destino);
            if (contadorman > cantidadMaximaDespachada) {
                cantidadMaximaDespachada = contadorman;
                destinoMasDespachado = destino;
            }
        } else if (destino === 'pereira') {
            contadorper++;
            maletaper = maletaper + maleta;
            console.info(`El destino de la maleta es: `+ destino);
            if (contadorper > cantidadMaximaDespachada) {
                cantidadMaximaDespachada = contadorper;
                destinoMasDespachado = destino;
            }
        } else if (destino === 'medellin') {
            contadormed++;
            maletamed = maletamed + maleta;
            console.info(`El destino de la maleta es: ` + destino);
            if (contadormed > cantidadMaximaDespachada) {
                cantidadMaximaDespachada = contadormed;
                destinoMasDespachado = destino;
            }
        } else if (destino === 'cali') {
            contadorcal++;
            maletacal = maletacal + maleta;
            console.info(`El destino de la maleta es: `+ destino);
            totaldescuento = costoBase * (15 / 100);
            if (contadorcal > cantidadMaximaDespachada) {
                cantidadMaximaDespachada = contadorcal;
                destinoMasDespachado = destino;
            }
        } else if (destino === 'san andres') {
            contadorsan++;
            maletasan = maletasan + maleta;
            console.info(`El destino de la maleta es: `+ destino);
            if (contadorsan > cantidadMaximaDespachada) {
                cantidadMaximaDespachada = contadorsan;
                destinoMasDespachado = destino;
            }
        } else if (destino === 'barranquilla') {
            contadorbarr++;
            maletabarr = maletabarr + maleta;
            console.info(`El destino de la maleta es: `+ destino);
            if (contadorbarr > cantidadMaximaDespachada) {
                cantidadMaximaDespachada = contadorbarr;
                destinoMasDespachado = destino;
            }
        } else if (destino === 'bogota') {
            contadorbog++;
            maletabog = maletabog + maleta;
            console.info(`El destino de la maleta es: `+ destino);
            if (contadorbog > cantidadMaximaDespachada) {
                cantidadMaximaDespachada = contadorbog;
                destinoMasDespachado = destino;
            }
        } else {
            console.error(`La ciudad no está en los planes de vuelo`);
        }

        const genero = readlineSync.question('Ingrese el genero del dueño de la maleta. F si es femenino o M si es masculino: ');
        // tolowercase es para si ingresan una mayuscula la convierta en minuscula
        if (genero.toLowerCase() === 'f') {
            contadorfemenino++;
            console.info('El Genero Seleccionado Es Femenino');
        } else {
            console.info('El Genero Seleccionado Es Masculino');
            contadormasculino++;
        }

        maleta = +readlineSync.question('Ingrese el peso de la maleta en KG: ');
        pesototal = maleta + pesototal;

        if (isNaN(maleta)) {
            console.error('El peso de la maleta debe de ser numérico: ');
        } else {
            if (maleta <= pesoNormal) {
                cantidadmaletas++;
                console.info(`El valor de viaje de su maleta es: ` + costoBase);
            } else {
                if (maleta > pesoMaximo) {
                    cantidadmaletas++;
                    const pesoExcedente = maleta - pesoMaximo;
                    const costoTotal = costoBase + (pesoExcedente * 5000);
                    console.info(`El valor de la maleta tiene un costo adicional de 5.000 pesos por cada KG de más: ` + costoTotal);
                } else {
                    cantidadmaletas++;
                    console.info(`El Valor de la maleta es: `+ costoBase);
                }
            }
        }
    } while (readlineSync.question('¿Desea agregar otro vuelo (s/n): ').toLowerCase() === 's');

    console.info(`La cantidad de maletas agregadas es: `+ cantidadmaletas);
    console.info(`El peso total que lleva el avión: `+ pesototal);
    console.info(`La cantidad de maletas que van en el vuelo de Manizales es: `+ contadorman);
    console.info(`La cantidad de maletas que van en el vuelo de Cali es: `+ contadorcal);
    console.info(`El total de descuento para el vuelo a Cali es: ` + totaldescuento);
    console.info(`La cantidad de maletas que van en el vuelo de Barranquilla es: `+ contadorbarr);
    console.info(`La cantidad de maletas que van en el vuelo de Medellin es: `+ contadormed);
    

}
    agregarvuelo();