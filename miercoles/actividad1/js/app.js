var  color= $(".seleccionado").css("background-color");
var canvas  = $("cavas");
var context= $canvas[0].getContext("2d");


$(".controles").on("click", "li", function(){
	//Quita y pone selecci´´on a eleme respectic
	$(this).siblings().removeClass("seleccionado");
	$(this).addClass("seleccionado");
	color=$(this).css("background-color");
});

//cuando "NuevoColor" es presionado
$("#revelarColor").click(function{
	changeColor();
	$("colorSeleccionado").toggle();
});

function cambiaColor(){
	var r = $("#rojo").val();
	var g = $("#verde").val();
	var b = $("#azul").val();
	$("#nuevoColor").css("background-color", "rgb("+r+","+g+","+b+")") 
}

$("input(type=range)").change(changeColor);

$("#addNewColor").click(function(){
	var $nuevoColor = $("<li></li>");
	$nuevoColor.css("background-color",$(#nuevoColor).css("background-color"))
	$(".controles ul").append($nuevoColor);
	$nuevoColor.click();
})