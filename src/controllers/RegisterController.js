// operações 
const mongoose = require('mongoose');

const Register = mongoose.model('Register');

module.exports = {

    async oi(req, res) {
        res.send("Hello world");
    },

    async index(req, res) {

        const registers = await Register.distinct('description');

       return res.send(registers); // retorno é em formato de array
    },

    async store(req, res) {

        const register = await Register.create(req.body);

        return res.json(register);
    },

    async show(req, res) {
        const { page = 1} = req.query;

        const register = await Register.paginate( { description: req.params.deviceName.toUpperCase() }, {page, limit: 10});

        return res.json(register);
    },
};
