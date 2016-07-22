//Animação SplashScreen + comando mask
$(document).ready(function(){
	$(".lista-transition").hide();
    $(".screen-initial").delay(300).fadeOut(1000)
    $('.input-valor').mask('000.000.000.000.000,00', {reverse: true})
});
// Interação botão Orçamento
$(".buttom-save").click(function() {
	var value = $(".input-valor").val();
	if(!value) { $(".input-valor").attr("placeholder", "  Insira o Valor"); } else {
	$(".screen-transition").delay(0).fadeOut(500)
	$(".lista-transition").show();
$('.valor-lista').append(value); } })
// Função botão + página Lista de Compras
/*$(".button-add").click(function(){
	$( '.body-bottom p' ).remove();
	$listaEl = $('<li class="lista-compra"><input class="clickable input-lista"></input><button class="button-remove glyphicon glyphicon-trash"></button><div class="wrapper-accordion"><input class="input-qtd"></input><input class="input-qtd"></input></div></li>');
	$listaEl.on("click", ".button-remove" , function(){$(this).parent().remove();});
    $(".body-bottom ul").append($listaEl);
})
*/
var hash = 1;
$(".button-add").click(function(){
	$( '.body-bottom p' ).remove();
	$listaEl = $('<li class="lista-compra"><input class="input-lista"></input><a class="accordion-toggle glyphicon glyphicon-triangle-bottom" data-toggle="collapse" data-parent="#accordion" href="#collapseOne"></a><button class="button-remove glyphicon glyphicon-trash"></button><div id="collapseOne" class="wrapper-accordion collapse in"><input class="input-qtd"></input><input class="input-qtd"></input></div></li>');
	$listaEl.on("click", ".button-remove" , function(){$(this).parent().remove();});
    $(".body-bottom ul").append($listaEl);
    $listaEl.find(".collapse").removeClass("in");
    $listaEl.find(".accordion-toggle").attr("href",  "#" + (++hash)).text();
    $listaEl.find(".wrapper-accordion").attr("id", hash).addClass("collapse").removeClass("in");
})