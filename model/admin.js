const mongoose = require('mongoose')
const { Schema } = mongoose

const admin = new Schema ({
    nm_admin: {
        type: String
    },
    email_admin: {
        type: String
    },
    photo_admin: {
        type: String
    },
    status_admin: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Admin', admin)