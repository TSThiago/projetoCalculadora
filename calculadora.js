// 6. Faça com que seu usuário escolha qual função ele deseja fazer
// com os números que ele inseriu, e depois de realizar essa
// operação pergunte se ele deseja fazer outra ou encerrar a
// aplicação.
// 7. Crie um array para salvar o resultado das operações e crie
// também uma função para exibir o histórico dos resultados.

function Somar() {
    soma = numA + numB
    return soma
}

function Subtrair() {
    subtracao = numA - numB
    return subtracao
}

function Multiplicar() {
    multiplicacao = numA * numB
    return multiplicacao
}

function Dividir() {
    divisao = numA / numB
    return divisao
}

continuar = true

while (continuar == true) {
    opcoes = prompt("O que deseja fazer? \n1 - Soma \n2 - Subtração \n3 - Multiplicação \n4 - Divisão")
    while (opcoes < 1 || opcoes > 5) {
        opcoes = prompt("Selecione uma opção válida: \n1 - Soma \n2 - Subtração \n3 - Multiplicação \n4 - Divisão")
    }

    numA = parseFloat(prompt("Insira o primeiro número:"))
    numB = parseFloat(prompt("Insira o segundo número:"))

    if (opcoes == 1) {
        Somar
        console.log(numA + " + " + numB + " = " + Somar())
    }

    if (opcoes == 2) {
        Subtrair
        console.log(numA + " - " + numB + " = " + Subtrair())
    }

    if (opcoes == 3) {
        Multiplicar
        console.log(numA + " x " + numB + " = " + Multiplicar())
    }
    Dividir
    if (opcoes == 4) {

        console.log(numA + " / " + numB + " = " + Dividir())
    }

    parar = prompt("Insira 1 para parar")
    if (parar == 1) {
        continuar = false
    }
}