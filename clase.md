## ¿Cómo nace Javascript?
Nace con la necesidad de generar dinamismo en las páginas web y que a su vez los usuarios y las empresas pudieran interactuar unos con otros.

## ¿Qué es Javascript?
Es un lenguaje interpretado, orientado a objetos, débilmente tipado y dinámico.

## Débilmente tipado

Se pueden hacer operaciones entre tipos distintos de datos (enteros con strings, booleanos con enteros, etc). Ejemplo:

```js
    4 + "7"; // 47
    4 * "7"; // 28
    2 + true; // 3
    false - 3; // -3
```

## Dinámico
Corre directamente en la etapa de Runetime sin una etapa de compilación previa. Esto permite probar nuestro código inmediatamente; pero también es lo que hace que los errores se muestren hasta que se ejecuta el programa.

## ¿Realmente es Javascript un lenguaje interpretado?
Si, y la razón es que el navegador lee linea por linea nuestro código el cuál le indica lo que tiene que hacer, sin la necesidad de compilar. 

Todo esto es controlado por el motor de Javascript V8 del navegador

## Forwards
Ser compatible con versiones futuras significa que incluir una adición al lenguaje en un programa no causaría que se rompa si se ejecuta en un motor JS anterior. JS no es compatible con versiones futuras.

## Backwards
Javascript es Backwards Compatible
Todas las funciones nuevas que salen de Javascript no dañarán el trabajo ya hecho, pero no se podrá utilizar en nuestro entorno de trabajo inmediatamente. 

Para solucionar esto está Babel que permite utilizar las nuevas características del lenguaje pero lo transforma a una versión que el navegador pueda entender.

## Estaticos
 Necesitan ser compilados para que la maquina los entienda 
 como JAVA C++

## Porque JavaScript?
 JavaScript tiene una comunidad enorme de desarrolladores que te pueden ir ayudando a generar diferentes cosas.

>Si solo estuvieras interesado en trabajar aplicaciones web tienes muchos frameworks y librerías construidas en JavaScript que te van a ayudar a hacer proyectos de forma mucho mas rápida, eficiente y robusta (Angular, View, React,entre otros)

>Si no quieres trabajar solo en aplicaciones Web puedes utilizar JavaScript con un framework que se llama React Native para poder construir aplicaciones nativas como Android y IOS.

>Puedes construir aplicaciones de escritorio con JavaScript, usando un framework llamado Electron, pueden correr en Mac o Windows.

>También puedes trabajar en la parte del Back-end o **IOT **(Internet Od Things) es un concepto que se refiere a una interconexion digital de objetos cotidianos con Internet. Esto con un Framework llamado NodeJS, el cual es un entorno de ejecución de JavaScript que corre directamente en el Back-end.


## En Javascript existen 7 tipos de datos:

#### STRING: 
>Cadenas de texto.

#### NUMBER: 
>Valores numéricos.

#### BOOLEAN: 
>Representa una entidad lógica y puede tener dos valores: true y false.

#### NULL: 
>Es un valor asignado tiene el valor de “no valor”.

#### UNDEFINED:
>Una variable a la que no se le ha asignado ningún valor tiene el valor undefined.

#### SYMBOL: 
>Nuevo en ECMAScript 2015.

#### OBJECT: 
>Un valor en memoria al que podemos acceder por un identificador.

## Estos tipos se dividen en dos grupos:
Primitivos y de Objeto.

## Tipos Primitivos
Los valores primitivos son inmutables, no pueden ser cambiados.

>String, Number, Boolean, null, undefined y Symbol son tipos primitivos.

Los tipos primitivos no tienen métodos ni propiedades, aunque en los string, numbers y booleans podemos acceder a ellas grácias a los wrappers objects.

## Tipos de Objeto

Un Objeto es un valor en memoria al que podemos acceder por un identificador.

En JavaScript los objetos pueden ser vistos como una colección de propiedades.

Un Objeto en notación literal tiene este aspecto:

>var persona = { nombre: “Marcel”, edad: “38”, ciudad: “Alaior” };


## Dentro de JavaScript tenemos tres formas de declarar una variable las cuales son: 
>var, const y let.

## Var: 
Era la forma en que se declaraban las variables hasta ECMAScript 5. 
Casi ya no se usa porque es de forma global y tiene las siguientes características:

Se puede reinicializar: osea todas las variables se inicializan, por ejemplo:

> Var automovil = "electric"; 

Entonces reinicializar es:
>Var automovil = "gasolina"; 

Entonces es la misma variable con diferente dato el último dato predomina.

Se puede reasignar: 

Esto significa que la variable ya inicializada le reasignamos otro valor por ejemplo: 

Inicializamos la variable: 
>Var motocicleta = "electric"; 

Ahora la reasignamos 
>motocicleta = "gasolina";

ya no va var.

#### Su alcance es función global: 
Quiere decir que inicializamos la variable, pero la podemos llamar desde cualquier bloque (una llave abierta y una cerrada {}) pero hay que tener mucho cuidado con ello ya que puede haber peligro, no es recomendable usar VAR.

## const y let 

Es la forma en que se declaran las variables a partir de ECMAScript 6,

## const: 

Sirve para declarar variables que nunca van a ser modificadas:

#### No se puede reinicilizar: 

Es una const única no puede haber otra inicializada con el mismo nombre. 

>const AUTOMOVIL = "electric"' 

No puede haber:

>const AUTOMOVIL = "gasolina"

No se pude re asignar una vez que la hayamos inicializado, no la podemos reasignar, no es inmutable, quiere decir que no puede cambiar.

## Let: 

Son variables que pueden ser modificadas, se pueden cambiar.

## Funciones Declarativas, de Expresion

### Declarativas 

>(son funciones que se declaran directamente).
```js
function miFuncion(){
    return "Hola Luis";
};
console.log(miFuncion());
```
### De expresión 

>(son funciones guardadas dentro de una variable y no tiene nombre propio).
```js
var anonima = function(){return "Hola otra vez"};
console.log(anonima());

var anonima2 = ()=>"Hola una vez mas";
console.log(anonima2());
```
En la expresión de función, la función podría o no llevar nombre, aunque es más común que se hagan anónimas.

## Diferencias:
A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.
Las funciones son uno de los pilares fundamentales en JavaScript. Una función es un procedimiento en JavaScript, un conjunto de sentencias que realizan una tarea o calculan un valor. Para usar una función, debe definirla en algún lugar del ámbito desde el cual desea llamarla.

La declaración de una función consiste de la palabra reservada function, seguida por:

El nombre de la función (opcional).
Una lista de argumentos para la función, encerrados entre paréntesis y separados por comas.
Las sentencias JavaScript que definen la función, encerradas por llaves.

Ejemplo de una función básica:

```js
function areaCuadrado( lado ) {
    return lado * lado;
}

// Llamado de la función para su ejecución
areaCuadrado(5);
```

## Existen diferentes tipos de funciones:

>Funciones Anónimas
Funciones de Flecha

Las funciones que no tienen especificado el retorno con la palabra reservada return, regresarán undefined.

Existe un tipo de declaración en los parámetros de una función en el cual no se necesitan especificar el número de parámetros que se van a recibir, eso se hace de la siguiente manera:

```js
// Trabajar con los argumentos en una función de flecha
const imprimeArgumentos = function(...args) {
    return args;
};
imprimeArgumentos(10, true, false, "Alejandra", "Hola");
```
## Parametros y Argumentos:

```js
function suma(a,b){
    let resultado = a + b;
    return resultado;
}
console.log(suma(5,9));
```
>parametros son a y b 

>argumentos son 5 y 9

>resultado 14

## Concatenar:

Se logra con el sifgno + o con ``
```js
let nombre = "Luis";
let apellido = "Padilla";
console.log(nombre +" "+ apellido);
console.log(`mi nombre es ${nombre} ${apellido}`);
```

## Scope: 

Alcance que tienen las variables en el codigo.

Existen 2 tipos de scopes.

>Global: Puede ser llamada a lo largo de nuestro programa.

>Local: Solo puede ser llamada dentro del bloque de codigo en el que se declaro.
```js
var miNombre = "Luis";

function nombre(){
    var miApellido = "Padilla";
    console.log(miNombre + " " + miApellido);
}

nombre();
```
* miNombre : Es la variable global.

* miApellido : Es la variable local.

## Hoisting

## ¿Qué es Hoisting?

En JavaScript, las declaraciones (por ejemplo, de variables o funciones) se mueven al principio de su scope o ámbito. 

Este comportamiento se conoce como hoisting y es muy importante tenerlo en cuenta a la hora de programar para prevenir posibles errores.

## Las funciones siempre se mueven arriba del scope. 
Por lo tanto, podemos elegir donde declararlas y usarlas.

## La declaración de las variables se mueven arriba del scope, pero no la asignación. 
Antes de usar una variable, habrá que crearla y asignarla.

>Nota: Hoisting sucede en var y function solo en versiones de ECMA 5 y menor

>Versiones posteriores cuentan con let y const

## Declarar:
```js
let nombre = "";
```
## Inicializar:
```js
nombre = "Luis";
```
## Coercion :

Coerción es la forma en la que podemos cambiar un tipo de valor a otro. 

### Existen dos tipos de coerción:
### Coerción implícita:  
>Es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
```js
var suma = 4 + "7";
console.log(suma);
console.log(typeof(suma));
// 47 string
```
### Coerción explicita : 
>Es cuando obligamos a que cambie el tipo de valor.
```js
var numero = 20;
var texto = String(numero);
// "20" string
```
```js
var numero = 20;
var texto = String(numero);
// "20" string
```
## Truthy Falsy :

## ¿Que tipos por default son verdaderos y falsos?

Usamos la función de JS que es Boolean() dentro del paréntesis ponemos el valor y nos dice si el mismo es False o True.

## Falsy

* Boolean() —> sin ningun valor es false
* Boolean(0) —> false
* Boolean(null) —> false
* Boolean(NaN) —> false // NaN es Not and Number
* Boolean(Undefined) —> false
* Boolean(false) —> false
* Boolean("") —> false

## Truthy

* Boolean(1) —> true //cualquier numero que no sea igual a cero es true
* Boolean(“a”) —> true
* Boolean(" ") —> true // siendo un espacio el valor es true
* Boolean([]) —> true // un array nos da un true
* Boolean({}) —> true // un objeto nos da el valor de true
* Boolean(function() {}) —> true //una funcion tambien es true
* Boolean(true) —> true
Todo esto lo vamos a usar en condiciones esto valida si es verdadero o falso para ejecutar cierta acción.

## Operdores :
## Operador de asignacion :
```js
 =	operador de asignacion
```

## Operadores de comparacion :
```js
==	igual que
===	estrictamente igual que
> or >= or >==	mayor o mayor igual que
< or <= or <==	menor o menor igual que
!= or !==	diferente que
```
## Operadores aritmeticos
```js
+	operador suma este se utiliza para concatener dos cadenas de texto.
-	operador resta
*	operador de multicacion
/	operador de division
%	operador de modulo
**	operador de potenciacion
```
tambien se les conoce como operadores binarios. por que toman dos valores y generan un resultado.

## Operadores logicos
```js
!	NOT niega un valor
&&	AND
||	OR
```
## Operadores de incremento
```js
let edad = 30;
edad ++; // 31

edad =+2; // 32
```
## Condicionales :
### if, else if, else :

```js
var registro = "blanco";
if(registro == "blanco"){
    console.log("el color es aceptado");
}
else if(registro == "rojo"){
    console.log("el color es aceptado");
}
else{
    console.log("el color no es aceptado");
}
```
>// el color es aceptado
## Ternario
```js
var proceso = 2;
var resultado = proceso == 1? console.log("terminado"): console.log("sin terminar");
```
>// sin terminar
## switch :
```js
var reg = 1;
switch(reg){
    case 1:
        console.log("el numero es uno");
        break;
    case 2:
        console.log("el numero es dos");
        break;
    case 3:
        console.log("el numero es tres");
        break;
    default:
        console.log("numero invalido");
        break;
}
```
>// el numero es uno

## Funcion random :

```js
function random(max, min){
    return Math.floor(Math.random()*(max-min + 1) + min);
}
```
## Arrays:

Un Array es un tipo de estructura de datos, objeto. Puede guardar datos distintos dentro, guarda los datos en forma de lista.

Sus estrctura principal se basa en indice y elemento

### lenght 
*Devuelve la longitud del array.
```js
var frutas =["manzana","pera","fresa","uva","sandia"];
console.log(frutas.length);
// 5
```
### push("mango") 
* Agrega elementos al final de array.
```js
var frutas =["manzana","pera","fresa","uva"];
frutas.push("mango");
// frutas =["manzana","pera","fresa","uva","mango"];
```
### pop() 
* Elimina el ultimo elemento del array.
```js
var frutas =["manzana","pera","fresa","uva"];
frutas.pop();
// frutas =["manzana","pera","fresa"];
```
### unshift("melon") 
* Agrega un elemento al array, pero lo agrega en primer lugar.
```js
var frutas =["manzana","pera","fresa"];
frutas.unshift("melon");
// var frutas =["melon,"manzana","pera","fresa"];
```
### shift() 
* Elimina el elemento que está en el inicio del array.
```js
var frutas =["manzana","pera","fresa","uva","sandia"];
frutas.shift();
// frutas =["pera","fresa","uva","sandia"];
```
### indexOf("fresa") 
* Devuelve la posición de un elemento del array.
```js
var frutas =["manzana","pera","fresa","uva","sandia"];
console.log(frutas.indexOf("fresa"));
// 2
```
### reverse() 
* Devuelve orden inverso.
```js
var frutas =["manzana","pera","fresa","uva","sandia"];
frutas.reverse();
// frutas = ['sandia','uva','fresa','pera','manzana'];
```
### sort() 
* Devuelve en orden alfabetico.
```js
var frutas =["manzana","pera","fresa","uva","sandia"];
frutas.sort();
// frutas = ['fresa','manzana','pera','sandia','uva'];
```
### slice(1) 
* Muestra desde la posicion 1 en adelante
```js
var frutas =["manzana","pera","fresa","uva","sandia"];
console.log(frutas.slice(1));
// frutas = ["pera","fresa","uva","sandia"];
```
### slice(1, 3) 
* Muestra entre la posicion 1 y la posicion 3
```js
var frutas =["manzana","pera","fresa","uva","sandia"];
console.log(frutas.slice(1, 3));
// frutas = ["fresa","uva"];
```
### splice
### Ejemplo 1  eliminar moto
```js
var articulos = ['carro', 'celular', 'moto', 'tv', 'libro']; 
articulos.splice(2, 1);

//['carro', 'celular', 'tv', 'libro']
```
 * El primer parámetro especifica el índice del elemento que quiero eliminar, en este caso es moto
 * El segundo parámetro especifica cuantos elementos del arreglo quiero eliminar, en este caso solo uno que es moto


### Ejemplo 2 modificar moto
```js
var articulos = ['carro', 'celular', 'moto', 'tv', 'libro']; 
articulos.splice(2, 1, 'laptop');

// ['carro', 'celular', 'laptop', 'tv', 'libro']
```
 * Se aplican los mismo parámetros, pero esta vez se le agrega el valor al que queremos modificar*/

## Ciclos o Bucles :

Los bucles pueden ejecutar un bloque de código varias veces. JavaScript admite diferentes tipos de bucles:

### for 
* Recorre un bloque de código varias veces
```js
var estudiantes = ["Juan","Pedro","Maria"];
for(i=0; i<estudiantes.length; i++){
    console.log(estudiantes[i]);
}
// Juan
// Pedro
// Maria
```

## for/in  
* Muestra los indices
```js
var estudiantes = ["Juan","Pedro","Maria"];
for (item in estudiantes){
    console.log(item);
}
// 0
// 1
// 2
```

## for/of 
* Muestra los valores 
```js
var estudiantes = ["Juan","Pedro","Maria"];
for (var item of estudiantes){
    console.log(item);
}
// Juan
// Pedro
// Maria
```

* while  
* Recorre un bloque de código mientras se cumple una condición específica
* El loop “while” sirve mejor para ciclos en los cuales yo no controlo cuantas veces itera
```js
let estudiantes = ["Luis","Pedro","Juan"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}
// hola, Luis
// hola, Pedro
// hola, Juan
```

* do/while  
* También recorre un bloque de código mientras se cumple una condición específica
```js

```
## Objetos :

Un objeto en programación es una representación abstracta de un objeto en la vida real, sin embargo también puede entenderse como un contenedor de datos.
Ejemplo:
Una botella de refresco tiene ciertas características y acciones.-
Características: altura, volumen, color, contenido, dureza etc…
Acciones: beber, reciclar, rehusar, aventar, abrir tapa, etc…

Respectivamente a estas características y acciones se les conoce como atributos(características) y métodos(acciones) en programación.

Los objetos son usados para almacenar ciertos datos que de otra manera serían muy sensibles al hackeo, por otro lado un objeto también puede ser el valor de una variable.

A modo de adelanto una clase a su vez es un molde que puede almacenar objetos y esta también como el objeto tiene atributos y métodos que puede heredar a cada uno de esos objetos conocida esta propiedad como herencia, en base a eso la clase this, es la clase principal desde la cual se ejecuta javascript a modo de ejemplo puedes consultar en consola del navegador console.log(this)

### ejemplo 1 :
```js
var automovil = {
    marca: "bmw",
    modelo: "minicouper",
    annio: 2020
};

console.log(automovil.marca);
```

### ejemplo 2 :
```js
var automovil2 = {
    marca: "chevrolet",
    modelo: "cavalier",
    annio: 2003,
    detalleDelAuto: function (){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

console.log(automovil2.detalleDelAuto());
```

## Funcion constructora

```js
function autoBase(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

autoNuevo = new autoBase("bmw", "minicouper", 2020);
auto2 = new autoBase("chevrolet","cavalier",2003);

console.log(autoNuevo.modelo);
console.log(auto2.modelo);
```
## Agregando elementos a un objeto :

```js
function autoBase(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

autoNuevo = new autoBase("bmw", "minicouper", 2020);
autoNuevo.color = "rojo";
```
### El resultado sera :
```js
autoNuevo{
    marca: "bmw",
    modelo: "minicouper",
    annio: 2020,
    color: "rojo"
}
```
## Recorriendo arrays (Metodos)

## filter : 
Nos permite filtrar solo los elementos que deseamos (según ciertos criterios) y devolverlos en un NUEVO ARRAY.

```js
let articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Television", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 30000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700}
];

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 1700;
});

console.log(articulosFiltrados);

// {nombre: 'Libro', costo: 320}
// {nombre: 'Teclado', costo: 500}
// {nombre: 'Audifonos', costo: 1700}
```
## map : 
Crea un NUEVO ARRAY con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

```js
let articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Television", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 30000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700}
];

let nombreArticulo = articulos.map(function(articulo){
    return articulo.nombre;
});

console.log(nombreArticulo);

// "Bici"
// "Television"
// "Libro"
// "Celular"
// "Laptop"
// "Teclado"
// "Audifonos"
```
## find() : 
Crea un NUEVO ARRAY devuelve el primer elemento del array que cumpla con la condición dada
```js
let articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Television", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 30000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700}
];

let encontrarArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Celular";
});

console.log(encontrarArticulo);

// {nombre: 'Celular', costo: 10000}
```
## foreach() : 
 Ejecuta lo que le definamos una vez por cada elemento de nuestro array
```js
articulos.forEach(function(articulo){
    console.log(articulo.costo);
});

// 3000
// 2500
// 320
// 10000
// 30000
// 500
// 1700
```
## some() : 
Comprueba si al menos un elemento del array cumple con la condición que le damos
```js
let articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Television", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 30000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700}
];

let articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

console.log(articulosBaratos);

// true
```
## ¿Cual es la diferencia entre find y filter ?

### filter retorna todas las coincidencias y find retorna solo la primer coincidencia



