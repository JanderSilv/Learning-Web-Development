const arr = [1,3,4,5,8,9];
const newArr = arr.map(function(item) {
    return item * 2;
});

console.log(newArr);

// Callback: Uma função que é passada como parametro de outra função.

// map(): O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
// foreach(): O método forEach() executa uma dada função em cada elemento de um array.

/* O foreach pode ser o mais indicado quando não precisamos alterar o valor dos elementos de um array. 
* Quanto ao map(), ele mostrou ser o mais indicado em cenários onde precisamos alterar o valor de um array.
*/

/* Além do map() ser mais rápido que o forEach na modificação de valores de um array, ele também
* permite concatenar outros métodos como: filter, reduce … etc.
*/

const sum = arr.reduce(function(total, next) { // Faz o somatório dos valores do array;
    return total + next;
})

console.log(sum);

/* i = 1;
* total = 0
* next = valor da primeira posição do array (1)

* i = 2;
* total = valor da primeira posição do array (1)
* next = valor da próxima posição do array (3)

* i = 3;
* total = total + next; (4)
*/

const filter = arr.filter(function(item) { // cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item) { // retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.
    return item === 4;
});

console.log(find);