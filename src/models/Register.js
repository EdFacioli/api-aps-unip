// Model Register

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const RegisterSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    timespent: {
        type: String,
        required: true,
    },
    mediumliter: {
        type: String,
        required: true,
    },
    mac: {
        type: String,
        required: true,
    },
    ip: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

RegisterSchema.plugin(mongoosePaginate);

mongoose.model('Register', RegisterSchema);