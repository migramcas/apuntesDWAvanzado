/*Programación orientada a objetos*/
//clase persona

/*
function Persona(edad){
	//Atributo
	this.edad=edad;
	//Método
	this.saludar=function(){//funcion anónima
		alert("Hola a todos esto es POO en JS");

	}


}

var Jorge= new Persona(22);
//estamos accediendo a los atributos del objeto

document.write("Tu edad es:" +Jorge.edad);

Jorge.saludar();*/

function Clase(){
	this.color="color";
	this.nombre="nombre";
	this.saludar=function(){
		alert("Hola" + this.nombre+"tu color favorito es:  "+this.color);

	}


}

var alguien=new Clase();
alguien.color="Azul";
alguien.nombre="Jorge";
document.write("hola "+ alguien.nombre+"tu color fav es: "+this.color);

alguien.saludar();