const db = require('../db')
const Animal = require('../models/animals')
const Habitat = require('../models/habitats')


// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const animals = [
        
        { name: 'Giraffe',
            scientificName: 'Giraffa camelopardalis',
            type: 'mammal',
            hasFur: true,
            image: 'giraffeimage.png',
            habitat: '67095d1e15fd78ce24757e06'  },

        {name: 'Grizzly Bear',
            scientificName: 'Giraffa camelopardalis',
            type: 'mammal',
            hasFur: true,
            image: 'grizzlybear.png',
            habitat: '67095d1e15fd78ce24757e04'  },
        
        { name: 'Snow Leopard',
            scientificName: 'Giraffa camelopardalis',
            type: 'mammal',
            hasFur: true,
            image: 'giraffeimage.png',
            habitat: '67095d1e15fd78ce24757e07'  },

        {name: 'Crocodile',
            scientificName: 'Giraffa camelopardalis',
            type: 'reptile',
            hasFur: false,
            image: 'snowleopard.png',
            habitat: '67095d1e15fd78ce24757e05'  },

        {name: 'Anaconda',
            scientificName: 'Giraffa camelopardalis',
            type: 'reptile',
            hasFur: false,
            image: 'giraffeimage.png',
            habitat: '67095d1e15fd78ce24757e05'  },

        {name: 'Bearded Dragon',
            scientificName: 'Giraffa camelopardalis',
            type: 'reptile',
            hasFur: true,
            image: 'giraffeimage.png',
            habitat: '67095d1e15fd78ce24757e06'  },

        {name: 'Penguin',
            scientificName: 'Giraffa camelopardalis',
            type: 'bird',
            hasFur: false,
            image: 'giraffeimage.png',
            habitat: '67095d1e15fd78ce24757e07'  },

        { name: 'Flamingo',
            scientificName: 'Giraffa camelopardalis',
            type: 'bird',
            hasFur: true,
            image: 'giraffeimage.png', 
            habitat: '67095d1e15fd78ce24757e05' },
             
        
        { name: 'Golden Eagle',
            scientificName: 'Giraffa camelopardalis',
            type: 'bird',
            hasFur: true,
            image: 'giraffeimage.png',
            habitat: '67095d1e15fd78ce24757e04'  },
    

        
    ]
    

    await Animal.insertMany(animals)
    console.log("Created some animals!")
    
}


const run = async () => {
  
    await main()
    db.close()
}

run()