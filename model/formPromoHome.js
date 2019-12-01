const mongoose = require('mongoose')
const { Schema } = mongoose

const formPromoHome = new Schema({
    id_promo: {
        type: Schema.Types.ObjectId,
        ref: 'ModalPromo',
        required: true
    },
    nm_calon: {
        type: String,
        required: true
    },
    email_calon: {
        type: String,
        required: true
    },
    no_telp_calon: {
        type: String,
        required: true
    },
    id_materi: {
        type: Schema.Types.ObjectId,
        ref: 'Materi',
        required: true
    },
    status: {
        type: Boolean,
        default: true,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('FormPromo', formPromoHome)