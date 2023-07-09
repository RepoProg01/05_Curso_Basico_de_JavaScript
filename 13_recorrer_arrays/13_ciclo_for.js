var estudiantes = ["Juan","Pedro","Maria"];

function saludarEstudiante(estudiante){
    return `Hola, ${estudiante}`;
}
for(i=0; i<estudiantes.length; i++){
    console.log(saludarEstudiante(estudiantes[i]));
}

for (item in estudiantes){
    console.log(item);
}

for (var item of estudiantes){
    console.log(item);
}