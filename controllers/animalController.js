const Animal = require('../models/animals');

//GetIndex
const getAllAnimals = async (req, res) => {
    try {
        const animals = await Animal.find()
        res.json(animals)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const getAnimalById = async (req, res) => {
    try {
        const { id } = req.params;
        const animal = await Animal.findById(id)
        if (animal) {
            return res.json(animal);
        }
        return res.status(404).send('Thats not an animal, donkey');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const getAnimalByType = async (req, res) => {
    try {
        const animal = await Animal.find( {'type': req.params.type})
        if (animal) {
            return res.json(animal);
        }
        return res.status(404).send('animal type not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const createAnimal = async (req, res) => {
    try {
        const animal = await new Animal(req.body)
        await animal.save()
        return res.status(201).json({
            animal,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}


//Update -> PUT
// const updateAnimal = async (req, res) => {
//     try {
//         let { id } = req.params;
//         let animal = await Animal.findByIdAndUpdate(id, req.body, { new: true })
//         if (animal) {
//             return res.status(200).json(animal)
//         }
//         throw new Error("animal not found")
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// }

//Delete -> Delete
// const deleteAnimal = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deleted = await Animal.findByIdAndDelete(id)
//         if (deleted) {
//             return res.status(200).send("Animal has been cooked by Shrek");
//         }
//         throw new Error("animal not found in the swamp");
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// }









module.exports ={
    getAllAnimals,
    getAnimalById,
    getAnimalByType,
    createAnimal,
    // updateAnimal,
    // deleteAnimal
}