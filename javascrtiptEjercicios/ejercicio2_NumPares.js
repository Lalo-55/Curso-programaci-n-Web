var numMax=parseInt(prompt("Ingrese el valor maximo: "));
var par="Los numeros pares entres 0 y "+numMax+" son: \n";

for(var i=0;i<=numMax;i++){

    if(i%2==0){
        
        par=par+" "+i;
       

    }

}
alert(par);
document.write(par);