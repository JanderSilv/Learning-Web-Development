const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);
app.use(logger('dev'));

setupWebsocket(server);

mongoose.connect('mongodb+srv://Omnistack:omnistack@jander-rwu9m.mongodb.net/DevRadar?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);
server.listen(3333, () => console.log(`server started: PORT: ${3333} | ENV: dev`));

// app.use(cors({
//     origin: 'http://localhost:3000'
// }));