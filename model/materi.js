const mongoose = require('mongoose')
const { Schema } = mongoose

const materi = new Schema ({
    nm_materi: {
        type: String,
        required: true
    },
    img_materi: {
        type: String,
        required: true
    },
    hrg_materi: {
        type: Number,
        required: true
    },
    desc_materi: {
        type: String,
        required: true
    },
    status_materi: {
        type: Boolean,
        default: true,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Materi', materi)