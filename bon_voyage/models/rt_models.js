const mongoose = require('mongoose');
const validator = require('validator');

const rt_schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true]
    }
})