var numero1=parseInt(prompt("Ingrese el primer numero: "));

var numero2=parseInt(prompt("Ingrese el numero 2"));
var resultado;

document.write("<h1>Elija la operaciona a realizar</h1> <ol><li>Suma</li> <li>Resta</li><li>Multiplicaiíon</li><li>División</li></ol>");


var operacion=prompt("Elija la operacion a realizar\n1.-Suma\n2.-Resta\n3.-Multiplicación\n4.-División");
var oper=parseInt(operacion);
alert(oper);

switch(oper){
    case 1:
        resultado=numero1+numero2;
        alert("La suma es: "+resultado);
        console.log("La suma es: "+resultado);
        break;
    case 2:
        resultado=numero1-numero2;
        alert("La resta es: "+resultado);
        console.log("La resta es: "+resultado);
        break;
    case 3:
        resultado=numero1*numero2;
        alert("La multiplicacion es: "+resultado);
        console.log("La multiplicacion es: "+resultado);
        break;
    case 4:
        resultado=numero1/numero2;
        alert("La División es: "+resultado);
        console.log("La División es: "+resultado);
        break;
   
    
        


}