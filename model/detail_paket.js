const mongoose = require('mongoose')
const { Schema } = mongoose

const detailPaket = new Schema ({
    id_paket : {
        type: Schema.Types.ObjectId,
        ref: 'Paket'
    },
    id_materi: {
        type: Schema.Types.ObjectId,
        ref: 'Materi'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('DetailPaket', detailPaket)