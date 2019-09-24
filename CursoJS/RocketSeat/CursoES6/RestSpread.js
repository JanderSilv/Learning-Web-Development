// REST
// Pegar o resto das propriedades

const usuario = {
    nome: 'Jander',
    idade: 18,
    endereco: {
        cidade: 'Salvador',
        estado: 'SC',
    },
};

const {nome, ...resto} = usuario;
console.log(nome, resto);


const arr = [1, 2, 3, 5, 7];

const [a, b, ...c] = arr;

console.log(a, b, c);



function soma(num1, num2, ...params) { // "...params": converte os parametros passados em um array;
    return params.reduce((total, next) => total + next);
}

console.log(`Params: ${soma(1, 3, 4, 5, 2, 9)}`);


// SPREAD
// Repassa as informações de uma estrutura de dados para outra.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2] // copia as informações dos arrays para cá

console.log(`Arr3: ${arr3}`);


const usuario2 = {
    nome: 'Jander',
    idade: 18,
    endereco: {
        cidade: 'Salvador',
        estado: 'SC',
    },
};

const usuario3 = { ...usuario2, nome: 'Gabriel'}; // copia os dados do user2 e altera o nome

console.log(usuario3);