// 4. Crie uma função que receba os dois valores fornecidos pelo
// usuário e faça uma multiplicação com eles, e retorne o
// resultado;
// 5. Crie uma função que receba os dois valores fornecidos pelo
// usuário e faça uma divisão com eles, e retorne o resultado;
// 6. Faça com que seu usuário escolha qual função ele deseja fazer
// com os números que ele inseriu, e depois de realizar essa
// operação pergunte se ele deseja fazer outra ou encerrar a
// aplicação.
// 7. Crie um array para salvar o resultado das operações e crie
// também uma função para exibir o histórico dos resultados.

numA = parseFloat(prompt("Insira o primeiro número:"))
numB = parseFloat(prompt("Insira o segundo número:"))

function Somar(){
    soma = numA + numB
    return soma
}
console.log(numA+ " + " +numB+ " = " +Somar())

function Subtrair(){
    subtracao = numA - numB
    return subtracao
}
console.log(numA+ " - " +numB+ " = " +Subtrair())

function Multiplicar(){
    multiplicacao = numA * numB
    return multiplicacao
}
console.log(numA+ " x " +numB+ " = " +Multiplicar())