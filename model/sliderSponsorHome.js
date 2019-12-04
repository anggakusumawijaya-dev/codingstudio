const mongoose = require('mongoose')
const { Schema } = mongoose

const sliderSponsorHome = new Schema ({
    nm_sponsor: {
        type: String
    },
    img_sponsor: {
        type: String
    },
    status_sponsor: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('SliderSponsor', sliderSponsorHome)