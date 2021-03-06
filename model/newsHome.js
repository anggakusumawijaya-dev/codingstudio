const mongoose = require('mongoose')
const { Schema } = mongoose

const newsHome = new Schema ({
    nm_news: {
        type: String
    },
    img_news: {
        type: String
    },
    desc_news: {
        type: String
    },
    author_news: {
        type: String
    },
    status_news: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('NewsHome', newsHome)