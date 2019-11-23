const mongoose = require('mongoose');
const requireDir = require('require-dir');
require("dotenv").config();

//iniciando DB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true  });
// importa tudo dentro diretorio models
requireDir('../models/');