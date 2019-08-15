// Traz o server para cá

const express = require('express');
const routes = express.Router(); // objeto especifico para rota
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController')

routes.get('/devs', DevController.index);

routes.post('/devs', DevController.store) // Criar um desenvolvedor
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes; // exportar informação do arquivo pro servidor


/* Informações Gerais:
* 1. Mongoose é um ODM, uma ferramenta para facilitar a utilização do Banco de Dados utilizando sintaxe JS ao invés da linguagem de Banco
*
*/