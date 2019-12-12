require('rootpath')()
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const jwt = require('_helpers/jwt')
const errorHandler = require('_helpers/error-handler')
// Koneksi database
require('./_helpers/dbController')

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

// use JWT auth to secure the api
app.use(jwt())

// api routes
require('./router/route') (app)

// global error handler
app.use(errorHandler.errorHandler)

// start server
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})