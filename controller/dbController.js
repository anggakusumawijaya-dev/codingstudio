const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config();
const uri = 'mongodb+srv://anggakusumawijaya:KMZwa8awaa@cluster0-ynfpo.mongodb.net/DILo?retryWrites=true&w=majority'
mongoose.connect(uri, {
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