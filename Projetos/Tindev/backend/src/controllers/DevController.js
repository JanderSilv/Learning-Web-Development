// Todas as rotas relacionadas a parte de manipulação de um dado

const axios = require('axios');
const Dev = require('../models/Dev')

module.exports = {

    async index(req, res) { // Listagem de registros da tabela
        const {user} = req.headers;
        
        const loggedDev = await Dev.findById(user); // Pega a instância do usuário logado

        const users = await Dev.find({ // Pega todos os usuários que atenderem aos filtros abaixo
            $and: [ // Operador de condição como &&
                { _id: { $ne: user }}, // Tira o usuário logado da busca
                { _id: { $nin: loggedDev.likes}},
                { _id: { $nin: loggedDev.dislikes}},
            ],
        })

        return res.json(users);
    },

   async store(req, res) { // async por conta do await
        
        const {username} = req.body; // reg.body.username

        const userExists = await Dev.findOne({user: username}); // Verificar se o usuário já existe no BD

        if (userExists) {
            return res.json(userExists);
        }

        // É necessário fazer a linha que traz a resposta esperar a requisão acontecer, usa-se o await para isso
        const response = await axios.get(`https://api.github.com/users/${username}`);

        const {name, bio, avatar_url: avatar} = response.data;

        /* Informações Acima:
        *   1. Pegando as informações da API do Github
        *   2. Modificando a chave de "avatar_url" para "avatar"
        */

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        })

        return res.json(dev); // O axios retorna a resposta da requisição no "response.data"
    }
};

/* Informações Gerais:
* 1. Axios é um pacote para fazer requisições em APIs externas
* 2. Metodos fundamentais: INDEX, SHOW, STORE, UPDATE, DELETE
*/