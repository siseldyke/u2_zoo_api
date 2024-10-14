const express = require('express');
const db = require('./db');
const animalController = require('./controllers/animalController')
const habitatController = require('./controllers/habitatController')
const bodyParser = require('body-parser');
const logger = require('morgan');
// const controllers = require('../controllers')
// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger('dev'))
app.use(bodyParser.json())
// app.use() middleware here ^ ///////////////////

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))


app.get('/', (req, res) => res.send('What are yeh doin in my zoo?!'))

app.get('/animals', animalController.getAllAnimals)
app.get('/animals/types/:type', animalController.getAnimalByType)
app.get('/animals/:id', animalController.getAnimalById)

app.get('/habitats', habitatController.getAllHabitats)
app.post('/animals', animalController.createAnimal) 