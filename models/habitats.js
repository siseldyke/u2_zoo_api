const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Habitat = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        climate: {type: String, required: true},
        image: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('habitat', Habitat)

