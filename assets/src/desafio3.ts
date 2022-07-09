// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

campoSaldo.innerHTML = "0";

function somarAoSaldo(soma:number) {
    let saldo:number = Number(campoSaldo.innerHTML);
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