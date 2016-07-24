'use strict'

localStorage.getItem('produtos');
var produtos = JSON.parse(localStorage.getItem('produtos'));
if(!produtos) {
    produtos = [];
    salvarNoLocalStorage();
}

function salvarNoLocalStorage(){
    localStorage.setItem('produtos', JSON.stringify(produtos));
}

function salvarProduto(item) {
    produtos.push(item);
    salvarNoLocalStorage();
}