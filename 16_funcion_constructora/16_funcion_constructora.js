function autoBase(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

autoNuevo = new autoBase("bmw", "minicouper", 2020);
auto2 = new autoBase("chevrolet","cavalier",2003);

console.log(autoNuevo.modelo);
console.log(auto2.modelo);


