const mongoose = require('mongoose')
const { Schema } = mongoose

const hasilKarya = new Schema ({
    nm_karya: {
        type: String,
        required: true
    },
    img_karya: {
        type: String,
        required: true
    },
    id_user: {
        type: Schema.Types.ObjectId,
        ref: 'UserAccount',
        required: true
    },
    desc_karya: {
        type: String,
        required: true
    },
    link_url_karya: {
        type: String,
        required: true
    },
    status_karya: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('HasilKarya', hasilKarya)