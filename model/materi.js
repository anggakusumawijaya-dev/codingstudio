const mongoose = require('mongoose')
const { Schema } = mongoose

const materi = new Schema ({
    nm_materi: {
        type: String
    },
    img_materi: {
        type: String
    },
    desc_materi: {
        type: String
    },
    hrg_materi: {
        type: Number
    },
    status_materi: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Materi', materi)