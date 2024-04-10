class Equipo {
     //Atributos - datos
     nombre="";
     marca="";
     responsable="";
     numero_cedula= 0;
     precioVenta =0;
     precioAlquiler =0;
    
     //El metodo constructor protege el programa para que no se creen
    //objetos sin los datos requeridos
    //En este metodo tambien se pueden inicializar otros atributos, segun las
    //necesidades que se tengan
    //Evita que se creen objetos a la loca

     constructor(nombre,marca,responsable,numero_cedula,precioAlquiler,precioVenta) {
 
         if(!nombre){
             throw new Error(`El equipo requiere un nombre`);
         }
         if(!marca){
             throw new Error(`El equipo requiere una marca`);
         }
         if(!precioVenta){
           throw new Error(`El equipo requiere un precio de venta`);
         }
         if(!precioAlquiler){
            throw new Error(`El equipo requiere un precio de alquiler`);
         }
         if(!responsable){
             throw new Error(`El equipo requiere un responable`);
         }
         if(!numero_cedula){
             throw new Error(`Se requiere el numero de cedula del responsable`);
         }
         this.nombre = nombre;
         this.marca = marca;
         this.responsable = responsable;
         this.numero_cedula = numero_cedula;
         this._precioVenta = precioVenta;
         this._precioAlquiler = precioAlquiler;
     }
     get precioAlquiler() {
        return this._precioAquiler;
    }
    
    //Encapsulamiento: proteccion del atributo: metodo setter
    set precioAlquiler(nuevoValorDelAlquiler){
        if(nuevoValorDelAlquiler <= 0){
            throw new Error(`el valor del alquiler no puede ser un valor negativo`);
        }
        this._precioAlquiler = nuevoValorDelAlquiler;
    }
    get precioVenta() {
        return this._precioVenta;
    }
    
    //Encapsulamiento: proteccion del atributo: metodo setter
    set precioVenta(nuevoValorDeVenta){
        if(nuevoValorDeVenta <= 0){
            throw new Error(`el valor del alquiler no puede ser un valor negativo`);
        }
        this._precioVenta = nuevoValorDeVenta;
    }
}

class Almacen {
    constructor() {
        this.equipos = {};
        this.totalVentas = 0;
        this.totalAlquileres = 0;
    }
    // metodos
    agregarEquipo(equipo) {
        this.equipos[equipo.nombre] = equipo;
    }
    //metodos 
    venderEquipo(nombre) {
        const equipo = this.equipos[nombre];
        if (equipo) {
            this.totalVentas = this.totalVentas + equipo._precioVenta;
            console.info(`El equipo ${nombre} ha sido vendido.`);
        } 
    }

    alquilarEquipo(nombre) {
        const equipo = this.equipos[nombre];
        if (equipo) {
            this.totalAlquileres = this.totalAlquileres + equipo._precioAlquiler;
            console.info(`El equipo ${nombre} ha sido alquilado.`);
        }
    }

    obtenerIngresos() {
       console.info(`Total de ingresos por ventas: ${this.totalVentas}, Total de ingresos por alquileres: ${this.totalAlquileres}`);
    }
}

let almacen = new Almacen();
almacen.agregarEquipo(new Equipo('Portatil-1','Lenovo','Sebastian',123456,1,1));
almacen.agregarEquipo(new Equipo('Portatil-2','Lenovo','roa',123456,4000,100));
almacen.agregarEquipo(new Equipo('Portatil-3','HP','Maria',654321,1500,100));

console.info(almacen.venderEquipo('Portatil-1'));
console.info(almacen.alquilarEquipo('Portatil-3'));
console.info(almacen.alquilarEquipo('Portatil-2'));
console.info(almacen.obtenerIngresos());