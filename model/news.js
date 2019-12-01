const mongoose = require('mongoose')
const { Schema } = mongoose

const News = new Schema ({
    nm_news: {
        type: String
    },
    img_news: {
        type: String
    },
    desc_news: {
        type: String
    },
    author: {
        type: String
    },
    status_news: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})