var persona={

    nombre:"lalo",
    apellidos:"mora",
    edad:25, 
    mostrar: function(){
        console.log("El nombre es "+this.nombre+" "+this.apellidos+" la edad es "+this.edad);
        alert("El nombre es "+this.nombre+" "+this.apellidos+" la edad es "+this.edad);

    }

}
persona.mostrar();