// Pegar orçamento
function pegarOrcamento() {
    var valorOrcamento, valorInputado;
    novoValorOrcamento = localStorage.getItem('orcamento');
    valorInputado = $('.orcamento').val();
    localStorage.setItem('orcamento', valorInputado);
}
$('#pegarOrcamento').on('click', function(){
    var orcamentoInputado, orcamentoReal, editReal; 
    orcamentoInputado = $('.orcamento').val();
    orcamentoReal = $('.real').text(orcamentoInputado);
	pegarOrcamento();
});

// Pegar Novo Orçamento
function pegarNovoOrcamento() {
    var valorOrcamento, novoValorOrcamento;
    valorOrcamento = localStorage.getItem('input-edit');
    novoValorOrcamento = $('.input-edit').val();
    localStorage.setItem('orcamento', novoValorOrcamento);
}

// Editar Orçamento
function editarOrcamento() {
     var orcamentoReal = $('.real').text();
     $('.input-edit').val(orcamentoReal);
}
$('.editar-valor').on('click', function(){
     editarOrcamento();
});

// Salvar edição do Orçamento
function salvarEdit() {
     var orcamentoEditado = $('.input-edit').val();
     $('.real').text(orcamentoEditado);
}
$('.btn-editar').on('click', function(){
     salvarEdit();
     pegarNovoOrcamento();
});

// Savar Produtos
function salvarProdutos() {
    
    $('.body-bottom ul li.lista-compra').each(function(){
        var produto = $(this);
        var nomeProduto = produto.find('.input-lista').val();
        var qtdProduto = produto.find('.input-qtd').val();
        var valorProduto = produto.find('.input-item').val();
        salvarProduto(
            { 
                nomeProduto: nomeProduto, 
                qtdProduto: qtdProduto, 
                valorProduto: valorProduto 
            }); 
    });
}

$('.btn-save-lista').on('click', function(){
     salvarProdutos();
});
