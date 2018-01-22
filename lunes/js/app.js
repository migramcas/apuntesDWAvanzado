/* Introducción a Javascript*/

/*		Operadores Aritméticos*/

var x=10;
var a =2;
y=3.5;
//Console.log imprime en la consola del navegador; clase.método()
console.log("Operadóres aritméticos: ")
console.log("la suma de X y Y es:", x+y);
console.log("la resta de X y Y es:", x-y);
console.log("la multiplicación de X y Y es:", x*y);
console.log("la división de X y Y es:", x/y);
console.log("la módulo de X y Y es:", x%a);

/*		Operadores de comparación*/
document.write("Operadores ´de comparación <br>");
document.write(1==true, "<br>");
document.write(1!=true, "<br>");
document.write(0===false, "<br>");
document.write(1!==true, "<br>");
document.write(5>3, "<br>");
document.write(5>=5, "<br>");
document.write(1<10, "<br>");
document.write(2<=2, "<br>");


/*Operadores lógicos*/

document.write("Operadores lógicos <br>");

//AND
document.write(1==true && 0==false, "<br>");
//OR
document.write(1==true || 0==false, "<br>");
//NOT
document.write(!true, "<br>");

document.write(isNaN(x)?"Si es un numero":"No es un numero", "<br>")


//Cuadros de mensajes más comunes

/*No podemos asignar el  valor a un alert:
respuesta= alert("Hola a atodos!");
document.write(respuesta);
*/

/*respuesta= confirm("Quieres propo´rcionar tu localización?");
document.write("<br>", respuesta);*/


/*
a=prompt("Ingresa tu edad: ", "default");
respuesta=Number(a);
if (respuesta>=18 && respuesta<=59){
	alert("Eres mayor de edad")
}else if(respuesta>=60){
	alert("Tienes ams de 60")
}
else{
	alert("No eres mayor de edad")
}
document.write("<br>", respuesta)*/

/*
peso = prompt("ingresa tu peso: ");
peso = Number(peso);
estatura=prompt("Ingresa tu estatura");
estatura=Number(estatura);
imc=peso/(estatura*estatura);
document.write(imc)
if(imc<18.5){
		alert("Peso bajo")
}else if(imc>=18.5 && imc<=24.9){

	alert("Peso normal");
}else if(imc>=25 && imc<=29.9){
	alert("Sobrepeso")
}*/


var arreglo1=[100,20,0.3,4,60,70,11,9,48];
var arreglo2=[1,,9,6];
//Ingresar datos a un arreglo
arreglo2.push("Uno");
arreglo2.push("dos");
arreglo2.push("Uno");

console.log(arreglo1);
console.log(arreglo2);
//Impresion personalizada con el método join
console.log(arreglo1.join(","))
console.log(arreglo2.join("."));

//Eliminar datos de un arreglo

//El m´´etodo pop quita el último elemento añadido
console.log(arreglo1.pop());
console.log(arreglo2.pop());

//Longitud del arreglo

console.log("tamaño del arreglo 1:", arreglo1.length)
console.log("tamaño del arreglo 2:", arreglo2.length)

//Ordenar datos´por medio  del método sort
var ordenados1=arreglo1.sort()
var ordenados2=arreglo2.sort()


/*Voltea los datos,  és decir, pasa él último al primero y así
*/
var reversa = ordenados1.reverse()

//aCCEDIE A CADA ELEMENTO DE UN ARREGLO
console.log(arreglo1);
console.log(arreglo2);
console.log("Posicion 0:", arreglo1[0])
console.log("Posicion 1:", arreglo2[1])

//cCICLO for   -> Estructura: for(inicio; hasta donde; de cuanto en cuanto)
for(i=0;i<arreglo1.length;i++){
	document.write(arreglo1[i],"<br>");
}

//Ciclo WHILE
var contador=0;

while(contador<arreglo2.length){
	console.log(arreglo2[contador]);
	contador++
}


//Funciones

function sumar(x,y){
	var tado;
	tado=x+y;
	return tado;
}
//Llamar a la función
console.log(sumar(5,25))

