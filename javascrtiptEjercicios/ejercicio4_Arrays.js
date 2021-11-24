
function media(numeros){
    var resultado=0;
    for(numero of numeros){
        resultado= resultado+numero;
    }

    var med =resultado/(numeros.length);
    return med;

}

var numeros=[9,8,10,8,10,10];

var res=media(numeros);
console.log("La media es: "+res);
alert("la media es: "+res);