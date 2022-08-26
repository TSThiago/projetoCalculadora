resultados = []
index = parseInt(0)

function Somar() {
    soma = numA + numB
    resultados [index] = soma
    index++
    return soma
}

function Subtrair() {
    subtracao = numA - numB
    resultados[index] = subtracao
    index++
    return subtracao
}

function Multiplicar() {
    multiplicacao = numA * numB
    resultados[index] = multiplicacao
    index++
    return multiplicacao
}

function Dividir() {
    divisao = numA / numB
    resultados[index] = divisao
    index++
    return divisao
}

function ExibirResultados(){
    console.log("Resultados das operações: "+resultados)
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
    
    if (opcoes == 4) {
        Dividir
        console.log(numA + " / " + numB + " = " + Dividir())
    }

    parar = prompt("Insira 1 para parar")
    if (parar == 1) {
        continuar = false
    }
}
ExibirResultados()