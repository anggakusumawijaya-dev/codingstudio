const mongoose = require('mongoose')
const { Schema } = mongoose

const userAccount = new Schema ({
    nm_user: {
        type: String
    },
    no_telp: {
        type: String
    },
    email_user: {
        type: String
    },
    pass_user: {
        type: String
    },
    user_pic: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('UserAccount', userAccount)