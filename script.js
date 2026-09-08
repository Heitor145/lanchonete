const codigoInput = document.querySelector("#codigo");
const quantidadeInput = document.querySelector("#quantidade");
const botao = document.querySelector("button");
const resultado = document.querySelector("#resultado");

function calcularTotal() {

    const codigo = Number(codigoInput.value);
    const quantidade = Number(quantidadeInput.value);
    
    let preco = 0;

    if (codigo === 1) {
        preco = 5.00;
    } else if (codigo === 2) {
        preco = 3.50;
    } else if (codigo === 3) {
        preco = 4.80;
    } else if (codigo === 4) {
        preco = 8.90;
    } else if (codigo === 5) {
        preco = 7.32;
    } else {
        alert("Código incorreto!");
        return; 
    }

    const valorTotal = preco * quantidade;

    resultado.textContent = `Valor a pagar: R$ ${valorTotal.toFixed(2)}`;
}

botao.addEventListener("click", calcularTotal);