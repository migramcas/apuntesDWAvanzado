/*
Jquery tiene la sintaxis:
$ ->Hace referencia a funciones de Jquery
$(selector).action(){ }
*/


//READY: El evento ready espera a que toda nuestra página se cargue antes de ejecutar cualquier código Jquery
//versión resumida: $(function){}
$(document).ready(function(){
	$("body").css("background","#1048AF")
	
	$("span").click(function(){
		$("#card2").hide();
		//$(elementoaesconder).hide; esconde nuestro DOM
		//hide(duration) "slow"
	})
	//Evento double click
	$("img").dblclick(function(){
		$("#card2").show();
	})

	//moseenter()
	$("#mostrar").mouseenter(function(){
		//$(selector).fadeIn(tiemponMiliSeg);     .fadeIn("slow") //fadeIn("fast") ->Aparece

		///También está .fadeOut()  ->Desaparece 
		$("#card2").fadeOut("fast")
	})

	//mousedown reacciona al click derecho, izquierdo o medio del ratón
	$("span.card-title").mousedown(function(){
		//slideToggle Si esta oculto, lo muestra/baja, si esta motrandose, se oculta
		$("#imagenes").slideToggle();
	})

	/*This:hacemos referencia al elemento que nos mandó el evento .attr('atributo') : ingresamo  al atribut de esa etyiqueta*/

	$(".m4 img").on("click",mostrarImagen);
	function mostrarImagen(){
		var nombre=$(this).attr('alt');
		var direccion = 'img/'+nombre+'.jpg';
		$('#imagen-principal').attr('src',direccion);
		$("#card2").show(1000);
	}


})