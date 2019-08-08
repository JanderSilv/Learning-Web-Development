const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes'); // importar arquivo

const server = express();

mongoose.connect('mongodb+srv://OmniStack:OmniStack@cluster0-rwu9m.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true}); // abrir conexão com o BD

// GET, POST, PUT, DELETE

server.use(cors());
server.use(express.json());
server.use(routes); // colocar configuração que vem de outro arquivo ou módulo

server.listen(3333);

// M - Model {É a abstração do BD}
// V - View, C - Controller
// yarn dev