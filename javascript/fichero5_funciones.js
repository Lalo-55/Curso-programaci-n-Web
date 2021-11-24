
var nom=prompt("Ingrese su nombre: ");
var age=prompt("Ingrese su edad: ");

var cadena=mensage(nom,age );
alert(cadena);

document.write(cadena);

function mensage(nom, age){
    var mensa= "Hola "+nom+", buenos días feliz "+age+" cumpleaños!!";
    return mensa;
}

nom="lalo";
age=25;
cadena=mensage(nom,age);
alert(cadena);

document.write("<h1>"+cadena+"</h1>");



