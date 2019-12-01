const mongoose = require('mongoose')
const { Schema } = mongoose

const formPromoHome = new Schema({
    id_promo: {
        type: Schema.Types.ObjectId,
        ref: 'ModalPromo'
    },
    nm_calon: String,
    email_calon: String,
    no_telp_calon: String,
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