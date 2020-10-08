/*
Crie um programa onde você receberá valores inteiros não negativos como entrada.

Ordene estes valores de acordo com o seguinte critério:

Primeiro os Pares
Depois os Ímpares
Você deve exibir os pares em ordem crescente e na sequência os ímpares em ordem decrescente.



let totalItems =[1,2,3,4];

var pares = item => !(item % 2)

var impares = item => item % 2


var numerosPar = totalItems.filter(pares);
var numerosImpar = totalItems.filter(impares);
var decrescente = numerosImpar.sort(function(a, b) {
    return b - a;
});
var itensUnicos = numerosPar +","+ decrescente

console.log(itensUnicos);

*/

let totalItems =[1,2,3,4];

var pares = item => !(item % 2)

var impares = item => item % 2


var numerosPar = totalItems.filter(pares);
var numerosImpar = totalItems.filter(impares);
var decrescente = numerosImpar.sort(function(a, b) {
    return b - a;
});
var itensUnicos = numerosPar +","+ decrescente

console.log(itensUnicos);
console.log(totalItems)

