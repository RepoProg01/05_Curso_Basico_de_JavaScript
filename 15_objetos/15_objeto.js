var automovil = {
    marca: "bmw",
    modelo: "minicouper",
    annio: 2020
};

console.log(automovil.marca);

var automovil2 = {
    marca: "chevrolet",
    modelo: "cavalier",
    annio: 2003,
    detalleDelAuto: function (){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

console.log(automovil2.detalleDelAuto());