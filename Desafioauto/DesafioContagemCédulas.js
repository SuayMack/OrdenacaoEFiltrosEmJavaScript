let line = 89



let notas = [100, 50, 20, 10, 5, 2, 1]

function imprimir(item) {
    if(0 < line < 10000400){
        if(line >= item){
            let nota = parseInt(line / item) 
            line = line % item   
            console.log(nota + " nota(s) de R$" + item)
        }else {
            console.log( 0 + " nota(s) de R$" + item)
          
        }
    }else {
        console.log("Presentation Error")
    }    
}
console.log(line)

console.log(notas.forEach(imprimir))





/*

let line = parseInt(gets())

console.log(line)

if(0 < line < 1000000) {
    if(line >= 100) {
        let notas_100 = parseInt(line / 100) 
        line = line % 100   
        console.log(notas_100 + " nota(s) de R$ 100,00")
    }else {
        console.log( 0 + " nota(s) de R$ 100,00")
    }
    
    if(line >= 50) {
        nota_50 = parseInt(line / 50)
        line = line % 50
        console.log(nota_50 + " nota(s) de R$ 50,00")
    }else {
        console.log( 0 + " nota(s) de R$ 50,00")
    }

    if(line >= 20) {
        nota_20 = parseInt(line / 20)
        line = line % 20
        console.log(nota_20 + " nota(s) de R$ 20,00")
    }else{
        console.log(0 + " nota(s) de R$ 20,00")
    }
    
    if(line >= 10) {
        nota_10 = parseInt(line / 10)
        line = line % 10
        console.log(nota_10 + " nota(s) de R$ 10,00")
    }else{
        console.log(0 + " nota(s) de R$ 10,00")
    }

    if(line >= 5) {
        nota_5 = parseInt(line / 5)
        line = line % 5
        console.log(nota_5 + " nota(s) de R$ 5,00")
    }else {
        console.log(0 + " nota(s) de R$ 5,00")
    }
    
    if(line >= 2) {
        nota_2 = parseInt(line / 2)
        line = line % 2
        console.log(nota_2 + " nota(s) de R$ 2,00");
    }else{
        console.log(0 + " nota(s) de R$ 2,00");
    }
    
    if(line >= 1) {
        nota_1 = parseInt(line / 1);
        console.log(nota_1 + " nota(s) de R$ 1,00");
    }else{
        console.log(0 + " nota(s) de R$ 1,00")
    }
}else {
    console.log("Presentation Error")
}	
*/