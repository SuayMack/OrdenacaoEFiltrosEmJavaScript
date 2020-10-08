let totalItems = parseInt(gets())

for (let i = 1; i <= totalItems; i++) {

    let samePosition = 0 //contador dos que vão ficar no mesmo lugar
    let numCustomers = parseInt(gets())
    let arr = (gets()).split(" ").map((arr) => arr) //Chegada clientes
    let arrOrder = arr.map((arr) => arr).sort(sortNum)

    //Ordena em ordem descrescente
    function sortNum(a, b){
        return (b - a) //decrescente
    }
    //compara e calcula os valores que são iguais e que não vão mudar de posição
    for (let j = 0; j < numCustomers; j++) {
        if ( arr[j] === arrOrder[j]) {
            samePosition++
        }
    }
    //Total dos que não vão mudar de lugar
    console.log(samePosition)
}