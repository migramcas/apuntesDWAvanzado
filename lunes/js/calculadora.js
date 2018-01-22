function sumar(x,y){
	var tado;
	tado=x+y;
	return tado;
}
//Llamar a la función
//console.log(sumar(5,25))


function restar(x,y){
	var tado;
	tado=x-y;
	return tado;
}
//Llamar a la función
//console.log(sumar

function multiplicar(x,y){
	var tado;
	tado=x*y;
	return tado;
}
//Llamar a la función
//console.log(sumar(5,25))

function dividir(x,y){
	var tado;
	if(y==0){
		alert("No se puede dividir entre cero");
	}else{
		tado=x/y;
	}
	return tado;
}
//Llamar a la función
//console.log(sumar(5,25))

opcion=prompt("Elije uná opción: \n1.-Suma \n2.-Resta \n3.-Multiplicar \n4.-Dividir");

x=Number(prompt("Ingrese el valor de x: "));

y=Number(prompt("Ingrese el valor de y: "));


if (opcion==1){ 
	alert("El resultado [suma] es: "+ sumar(x,y));
} else if (opcion==2){
	alert("El resultado [resta] es: "+ restar(x,y));
} else if (opcion==3){ 
	alert("El resultado [multiplicacion] es: "+multiplicar(x,y));
}else if (opcion==4){
	alert("El resultado [division] es: "+ dividir(x,y));
} 