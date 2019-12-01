const mongoose = require('mongoose')
const { Schema } = mongoose

const sliderHome = new Schema({
    nm_slider: {
        type: String,
        required: true
    },
    img_slider: {
        type: String,
        required: true
    },
    status_slider: {
        type: Boolean,
        default: true,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Slider', sliderHome)