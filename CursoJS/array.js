let num = [5, 8, 2]
console.log(num)

num.push(1,7)
console.log(num)

num.pop()
console.log(num)
console.log(`Tamanho do vetor: ${num.length}`)

num.sort()
console.log(num)

for(let pos in num) {
    console.log(num[pos])
}

let valorBusca = 8
let pos = num.indexOf(valorBusca)
if (pos == -1) console.log ("Valor não encontrado")
else console.log(`Posição do valor ${pos}`)