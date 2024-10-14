const db = require('../db')
const Habitat = require('../models/habitats')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

const habitats = [
    {
    name: 'Temperate',
    description: 'A climate that usually experiences all four seasons',
    climate: 'low to high',
    image: 'temperateimage.png'
    },
    {
    name: 'Tropical',
    description: 'A climate that usually experiences all four seasons',
    climate: 'low to high',
    image: 'temperateimage.png'
    },
    {
    name: 'Arid',
    description: 'A climate that usually experiences all four seasons',
    climate: 'low to high',
    image: 'temperateimage.png'
    },
    {
    name: 'Arctic',
    description: 'A climate that usually experiences all four seasons',
    climate: 'low to high',
    image: 'temperateimage.png'
    },


]
await Habitat.insertMany(habitats)
    console.log("Created some habitats!")
}
const run = async () => {
    await main()
    db.close()
}

run()