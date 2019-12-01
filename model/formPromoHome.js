const mongoose = require('mongoose')
const { Schema } = mongoose

const formPromoHome = new Schema({
    id_promo: {
        type: Schema.Types.ObjectId,
        ref: 'ModalPromo'
    },
    nm_calon: {
        type: String
    },
    email_calon: {
        type: String
    },
    no_telp_calon: {
        type: String
    },
    id_materi: {
        type: Schema.Types.ObjectId,
        ref: 'Materi'
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('FormPromo', formPromoHome)