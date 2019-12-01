const mongoose = require('mongoose')
const { Schema } = mongoose

const News = new Schema ({
    nm_news: {
        type: String,
        required: true
    },
    img_news: {
        type: String,
        required: true
    },
    desc_news: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    status_news: {
        type: Boolean,
        default: true,
        required: true
    }
}, {
    timestamps: true
})