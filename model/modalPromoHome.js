const mongoose = require('mongoose')
const { Schema } = mongoose

const modalPromoHome = new Schema ({
    nm_promo: {
        type: String
    },
    img_promo: {
        type: String
    },
    status_promo: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('ModalPromo', modalPromoHome)