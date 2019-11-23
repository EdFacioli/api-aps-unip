const route = require('./route');

const express = require('express');
const cors = require('cors');
const app = express();
const routes = express.Router();

// permitir o envio de dados em json - necessário ser aqui
app.use(express.json());

// CORS
app.use(cors());

// seta que todas as rotas terão /api/v1 como url base
app.use('/api/v1', routes);


route(routes);

module.exports = app;