const express = require('express');
const routes = express.Router();
const SessionController = require('./controllers/SessionController')

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição ou delete)
// req.body = Acessar corpo da requisição (para criação, edição)

/* app.get('/users', (req, res) => {
     return res.json({ idade: req.query.idade });
 });
*/

/* app.put('/users/:id', (req, res) => {
    return res.json({ idade: req.params.id });
});
*/

//routes.use(express.json()); // indica que a requisição vem em formato JSON

routes.post('/sessions', SessionController.store);

module.exports = routes;