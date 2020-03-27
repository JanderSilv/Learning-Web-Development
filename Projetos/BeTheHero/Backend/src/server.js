const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

/**
 * Tipos de Parâmetros:
 * 
 * Query Params: Enviados na rota após "?" (filtros, páginação) | Ex: BeTheHero.com.br/users?page=2&nome=Jander
 * Body: Corpo da requisição, criar ou alterar recursos
 * Route: Identificar recursos | Ex: BeTheHero.com.br/users/1 (users/:id)
 */