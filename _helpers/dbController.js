const config = require('config.json')
const mongoose = require('mongoose')

mongoose.connect(config.connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then((db) => {
    console.log(`DB connected`)
})
.catch((err) => {
    console.log('Mongoose error', err)
})