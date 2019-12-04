const fs = require('fs')
const path = require('path')
const News = require('../model/newsHome')

module.exports = {
    addNews: async (req, res) => {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            })
        } else {
            let { img_news } = req.files
            img_news.mv('./public/images/news' + img_news.name)
            const news = new News ({
                nm_news: req.body.nm_news,
                img_news: img_news.name,
                desc_news: req.body.desc_news,
                author: req.body.author,
                status_news: req.body.status_news
            })
            const savedNews = await news.save()
            res.send({
                status: 201,
                message: 'File is uploaded',
                data_img: {
                    name: img_news.name,
                    mimetype: img_news.mimetype,
                    size: img_news.size
                },
                response: news
            })
        }
    },
    detailNews: async (req, res) => {
        const news = await News.findById(req.params.id)
        res.send({
            status: 200,
            error: null,
            response: news
            
        })
    },
    updateNews: async (req, res) => {
        const { id } = req.params
        News.findById(id)
        .then ( async newsHome => {
            if (!newsHome) {
                res.send({
                    status: 404,
                    error: 'Data not found'
                })
            } else {
                if (req.files) {
                    let { img_news } = req.files
                    let path = `./public/images/slider/${img_news.name}`
                    clearImage(newsHome.img_news)
                    img_news.mv(path, async (err) => {
                        if (err) {
                            console.log(err)
                        } else {
                            const updNews = {
                                nm_news: req.body.nm_news,
                                img_news: img_news.name,
                                desc_news: req.body.desc_news,
                                author: req.body.author,
                                status_news: req.body.status_news
                            }
                            const updatedNews = await News.updateOne({ _id: id}, updNews)
                        }
                    })
                } else {
                    const updNews = {
                        nm_news: req.body.nm_news,
                        desc_news: req.body.desc_news,
                        author: req.body.author,
                        status_news: req.body.status_news
                    }
                    const updatedNews = await News.updateOne({ _id: id}, updNews)
                }
            }
        })
        .then(result => {
            res.send({
                status: 200,
                message: 'File is updated'
            })
        })
        .catch(err => {
            res.send({
                status: 400,
                error: 'Bad request'
            })
        })
    },
    deleteNews: async (req, res) => {
        const { id } = req.params
        News.findById(id)
        .then( async newsHome => {
            if (!newsHome) {
                res.send({
                    status: 404,
                    error: 'Not Found'
                })
            } else {
                clearImage(newsHome.img_news)
                const deletedNews = await News.findByIdAndRemove(id)
            }
        })
        .then(result => {
            res.send({
                status: 200,
                error: null,
                message: 'File is deleted'
            })
        })
        .catch(err => {
            res.send({
                status: 400,
                error: 'Failed to delete file'
            })
        })
    },
    listNews: async (req, res) => {
        dataNews = await News.find(req.body)
        res.send({
            status: 200,
            error: null,
            response: dataNews
        })
    }
}

const clearImage = filePath => {
    filePath = path.join(__dirname, '../public/images/news', filePath)
    fs.unlink(filePath, err => {
        if (err) throw err
    })
}