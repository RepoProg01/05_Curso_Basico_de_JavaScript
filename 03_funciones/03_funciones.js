// funcion declarativa
function miFuncion(){
    return "Hola Luis";
};
console.log(miFuncion());

var anonima = function(){return "Hola otra vez"};
console.log(anonima());

var anonima2 = ()=>"Hola una vez mas";
console.log(anonima2());

function suma(a,b){
    let resultado = a + b;
    return resultado;
}
console.log(suma(5,9));