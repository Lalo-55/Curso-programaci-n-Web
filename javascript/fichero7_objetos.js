//Objeto
// var objeto ={
//     color:"rojo",
//     numero:33,
//     metodo:function(colorr, num){
//         alert("El color es "+colorr+" y el número es "+ num);
//     }
// }

// var numero=prompt("Ingrese un numero: ");
// var color=prompt("Ingrese su color favorito: ");

// objeto.metodo(color,numero);

///////////////////////////////////////////
var años=prompt("Ingrese su edad:");
var nombre=prompt("ingrese su nombre: ");


var objeto ={

    metodo:function(años, nombre){
        for(var i=1;i<=años;i++){
            document.write("Feliz  "+i+" cumpleaños "+nombre+"<br>");
        }

    }

}

objeto.metodo(años,nombre)