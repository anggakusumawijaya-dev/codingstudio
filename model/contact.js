const mongoose = require('mongoose')
const { Schema } = mongoose

const contact = new Schema ({
    nm_contact: {
        type: String
    },
    email_contact: {
        type: String
    },
    msg_contact: {
        type: String
    }
}, {
    timestamps: true
})