const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando DB
mongoose.connect('mongodb://localhost:27017/iotapi', { useNewUrlParser: true, useUnifiedTopology: true  });
// importa tudo dentro diretorio models
requireDir('../models/');