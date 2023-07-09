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

// console.log(articulosFiltrados);

let nombreArticulo = articulos.map(function(articulo){
    return articulo.nombre;
});

// console.log(nombreArticulo);

let encontrarArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Celular";
});

// console.log(encontrarArticulo);

// articulos.forEach(function(articulo){
//     console.log(articulo.costo);
// });

let articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

// console.log(articulosBaratos);


