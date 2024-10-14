const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Animal = new Schema(
    {
        name: { type: String, required: true },
        scientificName: { type: String, required: true },
        type:{type: String, required: true},
        hasFur:{type: Boolean, required: true},
        image: { type: String, required: true },
        habitat: {type: Schema.Types.ObjectId, ref: 'Habitat'}
    },
    //lets mongoose know this is a mongoDb ID to reference
    { timestamps: true },
)

module.exports = mongoose.model('animals', Animal)