//Animação SplashScreen + comando mask
$(document).ready(function () {
    $('#telaOrcamento').toggleClass('transparent-in').removeClass('orcamento-invisivel');
    $('#telaOrcamento').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
        function (e) {
            $('.screen-initial').addClass('invisivel');
        });
    $('.input-valor').mask('000.000.000.000.000,00', {
        reverse: true
    });
    $('.input-edit').mask('000.000.000.000.000,00', {
        reverse: true
    });
    $('.input-qtd').mask('000.000.000.000.000', {
        reverse: true
    });
    $('.input-item').mask('000.000.000.000.000,00', {
        reverse: true
    });
});
/* Interação botão Nova lista
$(".buttom-save").click(function() {
	var value = $(".input-valor").val();
	if(!value) { 
        $(".input-valor").attr("placeholder", "Insira o Valor"); }
    else {
	    $(".screen-transition").delay(0).fadeOut(500)
	    $(".lista-transition").show();
        $('.valor-total').text(value); 
    } 
}); */
//transições
$(document).on('click', '#pegarOrcamento', function () {
    $('#telaLista').toggleClass('transparent-in').removeClass('lista-invisivel');
    $('#telaLista').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
        function (e) {
            $('#telaOrcamento').addClass('orcamento-invisivel').removeClass('transparent-in');
        });
});
$(".btn-listaSalvar").click(function () {
    //dar nome a lista salva
    var nomelista = $('.input-nomeLista').val();
    $('.nome-lista').text(nomelista);
    //
    $('#telaSalva').toggleClass('transparent-in').removeClass('salva-invisivel');
    $('#telaSalva').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
        function (e) {
            $('#telaLista').addClass('lista-invisivel').removeClass('transparent-in');
        });
});
$(".button-gabriel").click(function () {
    $('#telaOrcamento').toggleClass('transparent-in').removeClass('orcamento-invisivel');
    $('#telaSalva').toggleClass('transparent-out');
    $('#telaSalva').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
        function (e) {
            $('#telaSalva').addClass('salva-invisivel').removeClass('transparent-in').removeClass('transparent-out');
        });
    //cria botão para acessar lista
    $acessaLista = $('<button id="pegarOrcamento" class="button-acessaLista"><span class="nomelistacriada"></span><span class="valorlistacriada"></span></button>');
    $('.container-acessaLista').append($acessaLista);
    var nomelista = $('.input-nomeLista').val();
    $('.nomelistacriada').text(nomelista);
});
/* Interação botão Abrir lista
$(".button-open").click(function() {
	$(".screen-transition").delay(0).fadeOut(500)
	$(".lista-transition").show();
})*/

/* Função modal editar orçamento
$(".btn-editar").click(function() {
	$(".buttom-save").off("click");
	var value = $(".form-edit").val();
	if(!value) { $(".form-edit").attr("placeholder", "  Insira o Valor"); } else {
	$('.valor-total').text(value); } 
}); */

// Função botão + página Lista de Compras
var hash = 1;
$(".button-add").click(function () {

    $('.body-bottom p').remove();

    $listaEl = $('<li class="lista-compra"><input class="input-lista" placeholder="Nome do item"></input><a class="accordion-toggle glyphicon glyphicon-triangle-bottom" data-toggle="collapse" data-parent="#accordion" href="#collapseOne"></a><button class="button-remove glyphicon glyphicon-trash"></button><div id="collapseOne" class="wrapper-accordion"><input class="input-qtd" placeholder="Quantidade"></input><input class="input-item" placeholder="Valor"></input></div></li>');
    $listaEl.on("click", ".button-remove", function () {
        $(this).parent().remove();
    });
    $(".body-bottom ul").append($listaEl);

    $listaEl.find(".collapse").addClass("in");
    $listaEl.find(".accordion-toggle").attr("href", "#" + (++hash)).text();
    $listaEl.find(".wrapper-accordion").attr("id", hash).addClass("collapse").addClass("in");

});
// Função apagar lista
$(".dropdown-menu a").click(function () {
    $('.body-bottom li').remove();
})
