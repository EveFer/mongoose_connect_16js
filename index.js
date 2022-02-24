const mongoose = require('mongoose')





const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`



// Modelo(Plantilla | template)


// Schema (Definir mi Plantilla)

/*
1.- generamos el schema
2.- A partir del schema generamos el modelo
*/

const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    lastName: {
        type: String,
        require: true,
        minLength: 3,
        maxLenth: 100,
        trim: true
    },
    age: {
        type: Number,
        require: true,
        min: 1,
        max: 150
    },
    gender: {
        type: String,
        require: true,
        trim: true,
        enum: ['f', 'm'] // estos valores son validos
    }
})


// modelo

const Koder = mongoose.model('koders', koderSchema)



mongoose.connect(URL)
    .then(async (connection) => {
        console.log('DB connection established: ')

        // Koder.find({})
        //     .then((koders) => {
        //         console.log('Mis Koders: ', koders)
        //     })
        //     .catch((error) => console.error('Error: ', error))

        const newKoder = {
            lastName: 'Palacios',
            age: 25,
            gender: 'n'
        }

        Koder.create(newKoder)
            .then((koderCreated) => {
                console.log('KoderCreated: ', koderCreated)
            })
            .catch((error) => console.error('Error: ', error) )


        const koderCreated = await Koder.create(newKoder)
        console.log(koderCreated)
    })
    .catch((error) => {
        console.error('Error: ', error)
    })