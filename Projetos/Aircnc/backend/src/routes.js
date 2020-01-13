const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const routes = express.Router();
const upload = multer(uploadConfig);

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;


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