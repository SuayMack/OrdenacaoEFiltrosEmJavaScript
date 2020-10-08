let line = parseInt(gets())

let palavras = []

for (var i = 0; i < line; i++) {
    palavras[i] = gets()
                .split(' ')
                .sort((a, b) => (b.length > a.length) ? 1 :
                    (b.length === a.length)  ? (a > b) -1 : -1)
                .toString()
                .replace(/,/gi, " ")    
}
for (sentenca in palavras) console.log(palavras[sentenca]);
