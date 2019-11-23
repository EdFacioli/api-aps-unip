// Adiciona as configurações com o banco de dados
require('./database-config');

// importa o controller
const RegisterController = require('../controllers/RegisterController');


module.exports = (app) => {

    app.get('/registers/device', RegisterController.index),
    app.get('/registers/device/:deviceName', RegisterController.show),
    
    //funcionou
    // app.get('/registers/:descr', RegisterController.index),
    app.post('/registers/device', RegisterController.store)
    // app.get('/registers/:id', RegisterController.show),
    // app.put('/registers/:id', RegisterController.update),
    // app.delete('/registers/:id', RegisterController.destroy)

};
