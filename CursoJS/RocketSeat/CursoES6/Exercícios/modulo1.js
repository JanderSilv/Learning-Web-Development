// Exercicio 1:

class Usuario {
    constructor(email = "", senha = "") {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        return this.admin === true;
    }
}

class Admin extends Usuario {
    constructor(email = "", senha = "") {
        super(email, senha);
        this.admin = true;
    }
}

const user1 = new Usuario("email@teste.com", "12345");
const admin1 = new Admin("Jander.silv@outlook.com", "admin");

console.log(`User1: ${user1.isAdmin()}`);
console.log(`Admin1: ${admin1.isAdmin()}`);

// Exercicio 2:

const usuarios = [  
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },  
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },  
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(usuarios => usuarios.idade);

console.log(`\nIdades: ${idades} \n`);

// Exercicio 2.2:

const filter = usuarios.filter(usuarios =>
    usuarios.empresa === "Rocketseat" && usuarios.idade > 18
);

console.log(filter);

// Exercicio 2.3:

const find = usuarios.find(usuarios => 
    usuarios.empresa === "Google"
);


console.log('\nFind: ' + find + '\n');

// Exercicio 2.4:

const idades2 = usuarios
                    .map(usuarios => ({ ...usuarios, idade: usuarios.idade * 2}))
                    .filter(usuarios => usuarios.idade <= 50);

console.log(idades2);

// Exercicio 3:
const arr = [1, 2, 3, 4, 5];

arr.map(item => item + 10);

console.log(`\nArr: ${arr}\n`);

// Exercicio 3.2:

const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = usuario => usuario.idade;

console.log(`Mostra Idade: ${mostraIdade(usuario)}\n`);

// Exercicio 3.3:

const nome = "Jander";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => ({nome, idade});

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// Exercicio 3.4:

const promise = () => new Promise = (resolve, reject) => resolve();
