const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true}
);

const Shoe = mongoose.model('Shoe', shoeSchema)
module.exports = Shoe
