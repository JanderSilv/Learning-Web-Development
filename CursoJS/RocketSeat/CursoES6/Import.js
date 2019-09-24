import {soma, sub} from './funcoes';
import soma from './funcoes'; // Funções default não precisam importar com a chave
import {soma as somaNumeros} from './funcoes'; // mudar o nome da função quando ela não é Default
import * as funcoes from './funcoes';

console.log(soma(1,2));
console.log(sub(3,2));

console.log(funcoes);