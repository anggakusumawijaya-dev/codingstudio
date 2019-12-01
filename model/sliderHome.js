const mongoose = require('mongoose')
const { Schema } = mongoose

const sliderHome = new Schema({
    nm_slider: String,
    img_slider: String,
    status_slider: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Slider', sliderHome)