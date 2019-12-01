const mongoose = require('mongoose')
const { Schema } = mongoose

const materi = new Schema ({
    nm_materi: String,
    img_materi: String,
    hrg_materi: Number,
    desc_materi: String,
    status_materi: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Materi', materi)