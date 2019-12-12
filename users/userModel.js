const mongoose = require('mongoose')
const { Schema } = mongoose

const userAccount = new Schema ({
    username: {
        type: String,
        unique: true,
        required: true
    },
    no_telp: {
        type: String,
        required: true
    },
    email_user: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    photo_user: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('UserAccount', userAccount)