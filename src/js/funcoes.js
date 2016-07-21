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
$(".button-add").click(function(){
	$( '.body-bottom p' ).remove();
	$listaEl = $('<li class="lista-compra"><input></input><button class="button-remove glyphicon glyphicon-trash"></button></li>');
	$listaEl.on("click", ".button-remove" , function(){$(this).parent().remove();});
    $(".body-bottom ul").append($listaEl);
})

