var n1 = 10;
var n2 = 22;
var n3 = 37;

function adicao() {
    let result = n1 + n3;
    document.getElementById("ad").textContent += result;
}

function subtracao() {
    let result = n1 - n3;
    document.getElementById("sub").textContent += result;
}

function multiplicacao() {
    let result = n1 * n3;
    document.getElementById("mult").textContent += result;
}

function divisao() {
    let result = n1 / n2;
    document.getElementById("div").textContent += result;
}

// Chama as funções para calcular e exibir os resultados
adicao();
subtracao();
multiplicacao();
divisao();
