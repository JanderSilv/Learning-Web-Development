const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Salvador',
        estado: 'SC',
    },
};

const { nome, idade, endereco: { cidade } } = usuario;

function mostraNome({nome, idade}) {
    console.log(nome, idade);
}

console.log(nome);
console.log(idade);
console.log(cidade);


const arr = [1, 2, 3, 5, 7];

const [a, b] = arr;

console.log(a, b);