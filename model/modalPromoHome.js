const mongoose = require('mongoose')
const { Schema } = mongoose

const modalPromoHome = new Schema ({
    nm_promo: {
        type: String,
        required: true
    },
    img_promo: {
        type: String,
        required: true
    },
    status_promo: {
        type: Boolean,
        default: true,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('ModalPromo', modalPromoHome)