const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://OmniStack:omnistack@jander-rwu9m.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json()); // indica que a requisição vem em formato JSON
app.use(routes);

app.listen(3333);