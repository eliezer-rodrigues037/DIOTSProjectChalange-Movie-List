"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
campoSaldo.innerHTML = "0";
function somarAoSaldo(soma) {
    let saldo = Number(campoSaldo.innerHTML);
    saldo += soma;
    campoSaldo.innerHTML = saldo.toString();
}
function limparSaldo() {
    campoSaldo.innerHTML = '';
}
botaoAtualizar.addEventListener('click', function () {
    let value = Number(soma.value);
    if (value)
        somarAoSaldo(value);
    soma.value = '';
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
