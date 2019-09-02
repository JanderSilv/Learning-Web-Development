// Atribuir um valor ao parâmetro na criação da função impede que a variável seja "UNDEFINED"

function Soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(Soma(2))

let v = function(x) {
    return x * 2
}

console.log(v(5))