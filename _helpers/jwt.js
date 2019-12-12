const expressJwt = require('express-jwt')
const config = require('config.json')
const userService = require('../users/userService')

module.exports = jwt

function jwt() {
    const secret = config.secret
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/slider',
            '/slider-sponsor',
            '/modal-promo',
            '/form-promo',
            '/materi',
            '/paket',
            '/users',
            '/admin',
            '/news',
            '/contact',
            '/hasil-karya'
        ]
    })
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub)

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true)
    }

    done()
}