const News = require('../model/newsHome')

module.exports = {
    addNews: async (req, res) => {
        const addNews = await News.create(req.body)
        res.status(201).json({
            error: null,
            message: 'Successfully',
            response: addNews
        })
    },
    detailNews: async (req, res) => {
        const { id } = req.params
        const detailNews = await News.findById(id)
        res.status(200).json({
            error: null,
            message: 'Successfully retrieve data',
            response: detailNews
        })
    },
    updateNews: async (req, res) => {
        const { id } = req.params
        News.findById(id)
        .then(async news => {
            if (!news) {
                res.status(400).json({
                    message: 'Data not found'
                })
            } else {
                const updatedNews = await News.updateOne(req.body)
            }
        })
        .then(result => {
            res.status(200).json({
                error: null,
                message: 'Successfully update data'
            })
        })
        .catch(err => {
            res.status(400).json({
                error: 'Failed to update data'
            })
        })
    },
    deleteNews: async (req, res) => {
        const { id } = req.params
        News.findById(id)
        .then(async news => {
            if (!news) {
                res.status(404).json({
                    error: 'Data not found'
                })
            } else {
                const deleteNews = await News.findByIdAndRemove(id)
            }
        })
        .then(result => {
            res.status(200).json({
                error: null,
                message: 'Data is deleted'
            })
        })
        .catch(err => {
            res.status(400).json({
                error: 'Failed to delete data'
            })
        })
    },
    listNews: async (req, res) => {
        const listNews = await News.find()
        res.status(200).json({
            error: null,
            message: 'Successfully retrieve data',
            response: listNews
        })
    }
}