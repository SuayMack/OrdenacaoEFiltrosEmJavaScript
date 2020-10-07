/*
Crie um programa onde você receberá valores inteiros não negativos como entrada.

Ordene estes valores de acordo com o seguinte critério:

Primeiro os Pares
Depois os Ímpares
Você deve exibir os pares em ordem crescente e na sequência os ímpares em ordem decrescente.
*/


let totalItems =[1,2,3,4];
for (var i = 0; i < totalItems.length; i++) {
    let itens = totalItems[i];
    if(itens % 2 !=0){
        let itensImpares = itens.sort();
    }else{
        let itensPares = itens.sort();
    }
        
    console.log(itensImpares) 
    console.log(itensPares) 
}
