require("dotenv").config();

const app = require('./src/config/config-express');

app.listen(process.env.PORT, function () {
    console.log('Servidor rodando na porta ' + process.env.PORT);
});
