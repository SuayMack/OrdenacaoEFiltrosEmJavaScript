/*
Crie um programa onde você receberá valores inteiros não negativos como entrada.

Ordene estes valores de acordo com o seguinte critério:

Primeiro os Pares
Depois os Ímpares
Você deve exibir os pares em ordem crescente e na sequência os ímpares em ordem decrescente.
*/
let totalItems = parseInt(gets())

let numeros = Array(totalItems)

for (var i = 0; i < totalItems; i++) {
  numero = parseInt(gets())
  if (105 > numero >= 0 ) {
    numeros[i] = numero
  }
}

pares = numeros.filter(value => value % 2 == 0).sort((a, b) => a-b)
impares = numeros.filter(value => value % 2 != 0).sort((a, b) => b-a)

pares.forEach(i => console.log(i))
impares.forEach(i => console.log(i))