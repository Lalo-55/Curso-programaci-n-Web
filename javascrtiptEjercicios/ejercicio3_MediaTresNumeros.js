var num1 =parseInt(prompt("Ingrese el primer numero: "));
var num2 =parseInt(prompt("Ingrese el segundo numero: "));
var num3 =parseInt(prompt("Ingrese el tercer numero: "));

function medio(num1, num2, num3){
    var resultado=(num1+num2+num3)/(3);
    return resultado;
}

var res=medio(num1,num2,num3);
console.log("La media es: "+res );
alert("La media es: "+res);

