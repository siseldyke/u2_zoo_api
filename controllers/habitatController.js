const Habitat = require('../models/habitats');

const getAllHabitats = async (req, res) => {
    try {
        const habitats = await Habitat.find()
        res.json(habitats)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports ={
    getAllHabitats
}