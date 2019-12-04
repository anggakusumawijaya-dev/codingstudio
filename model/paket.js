const mongoose = require('mongoose')
const { Schema } = mongoose

const paket = new Schema ({
    nm_paket: {
        type: String
    },
    img_paket: {
        type: String
    },
    desc_paket: {
        type: String
    },
    hrg_paket: {
        type: Number
    },
    status_paket: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Paket', paket)