//Animação SplashScreen + comando mask
$(document).ready(function () {
    $('#backListas').hide();
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
//transições
$('#pegarOrcamento').on('click', function () {
    $('#telaLista').toggleClass('transparent-in').removeClass('lista-invisivel').removeClass('invisivel');
    $('#telaLista').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
        function (e) {
            $('#telaOrcamento').addClass('orcamento-invisivel').removeClass('transparent-in');
        });
});
$(".button-open").click(function () {
    $('.body-bottom ul').html('<p>A lista está vazia, clique em + para adicionar um novo item<p/>'); //Limpa lista se existir
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
$(".button-editLista").click(function () {
    $('#telaOrcamento').toggleClass('transparent-in').removeClass('orcamento-invisivel');
    $('#telaSalva').toggleClass('transparent-out');
    $('#telaSalva').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
        function (e) {
            $('#telaSalva').addClass('salva-invisivel').removeClass('transparent-in').removeClass('transparent-out');
        });
    //cria botão para acessar lista
    $acessaLista = $('<span class="nomelistacriada"></span>R$ <span class="valorlistacriada"></span>');
    $('.container-acessaLista').html($acessaLista);
    var nomelista = $('.nome-lista').text();
    $('.nomelistacriada').text(nomelista);
    var valorlista = $('div.dados-lista #realListas').text();
    $('.valorlistacriada').text(valorlista);
    var valorlistaCriada = $('.valorlistacriada').text();
    $('.orcamento').val(valorlistaCriada);
});
$(".button-novaLista").click(function () {
    $('#telaOrcamento').toggleClass('transparent-in').removeClass('orcamento-invisivel');
    $('#telaSalva').toggleClass('transparent-out');
    $('#telaSalva').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
        function (e) {
            $('#telaSalva').addClass('salva-invisivel').removeClass('transparent-in').removeClass('transparent-out');
        });
    $('#backListas').show();
    $('input').val("");
});
$("#backListas").click(function () {
    $("#telaOrcamento").removeClass("transparent-in").addClass("orcamento-invisivel");
    $('#telaSalva').removeClass("salva-invisivel").toggleClass('transparent-out');
    $('#telaSalva').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
    function (e) {
        $('#telaSalva').removeClass('transparent-in').removeClass('transparent-out').addClass("transparent-in");
    });
});


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
$("#backOrcamento").click(function () {
    $("#telaOrcamento").removeClass("orcamento-invisivel").addClass("transparent-in");
    $('#telaLista').addClass('lista-invisivel');
});
