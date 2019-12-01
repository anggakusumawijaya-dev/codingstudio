const express = require('express')
const fileupload = require('express-fileupload')
const path = require('path')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
// Koneksi database
require('./controller/dbController')

app.use(fileupload())

app.use(express.static('public'))

// NEW - Add CORS headers - see https://enable-cors.org/server_expressjs.html
app.use(
    cors({
        origin : '*',
        methods : 'GET, PUT, POST, DELETE',
        header : 'Authorization, Origin, X-Requested-With, Content-Type, Accept'
    })
)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

require('./router/route') (app)
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})