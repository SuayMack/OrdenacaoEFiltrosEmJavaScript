// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
let totalItems = gets();

for (var i = 0; i < totalItems; i++) {
    let itens = gets().split(" ")
    let itensOrdenados = new Set(itens)
    let resposta = [...itensOrdenados].sort().toString().replace(/,/g," ")
    console.log(resposta)
  }
