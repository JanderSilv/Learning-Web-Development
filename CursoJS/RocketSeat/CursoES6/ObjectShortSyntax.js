const nome = "Jander";
const idade = 18;

const usuario = {
    nome: nome,
    idade: idade,
    empresa: 'Rockeatseat',
};

console.log(usuario);

// em caso de existir uma váriavel com o mesmo nome do atributo no objeto, basta omitir;

const usuario2 = {
    nome,
    idade,
    empresa: 'Rockeatseat',
};

console.log(usuario2);