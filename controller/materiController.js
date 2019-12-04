const fs = require('fs')
const path = require('path')
const Materi = require('../model/materi')

module.exports = {
    addMateri: async (req, res) => {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            })
        } else {
            let { img_materi } = req.files          
            img_materi.mv('./public/images/sliders/' + img_slider.name)
            const materi = new Materi ({
                nm_materi: req.body.nm_materi,
                img_materi: img_materi.name,
                desc_materi: req.body.desc_materi,
                hrg_materi: req.body.hrg_materi,
                status_materi: req.body.status_materi
            })
            const savedMateri = await materi.save() 
            res.send({
                status: 201,
                message: 'File is uploaded',
                data_img: {
                    name: img_materi.name,
                    mimetype: img_materi.mimetype,
                    size: img_materi.size
                },
                response: materi
            })
        }
    },
    detailMateri: async (req, res) => {
        const { id } = req.params
        const materi = await Materi.findById(id)
        res.send({
            status: 200,
            error: null,
            response: materi
        })
    },
    updateMateri: async (req,res) => {
        const { id } = req.params
        Materi.findById(id)
        .then( async materiHome => {
            if (!materiHome) {
                res.send({
                    status: 404,
                    error: 'Data not found'
                })
            } else {
                if (req.files) {
                    let { img_materi } = req.files
                    let path = `./public/images/materi/${img_materi.name}`
                    clearImage(materiHome.img_materi)
                    img_materi.mv(path, async (err) => {
                        if (err) {
                            console.log(err)
                        } else {
                            const updMateri = {
                                nm_materi: req.body.nm_materi,
                                img_materi: img_materi.name,
                                desc_materi: req.body.desc_materi,
                                hrg_materi: req.body.hrg_materi,
                                status_materi: req.body.status_materi
                            }
                            const updatedMateri = await Materi.updateOne({_id: id}, updMateri)
                        }
                    })
                } else {
                    const updMateri = {
                        nm_materi : req.body.nm_materi,
                        status_materi : req.body.status_materi,
                        desc_materi: req.body.desc_materi,
                        hrg_materi: req.body.hrg_materi,
                        status_materi: req.body.status_materi
                    }
                    const updatedMateri = await Materi.updateOne({_id: id}, updMateri)
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
                error: 'Failed to update file'
            })
        })
    },
    deleteMateri: async (req, res) => {
        const { id } = req.params
        Materi.findById(id)
        .then( async materiHome => {
            if (!materiHome) {
                res.send({ 
                    status: 404,
                    error: 'Not Found'
                })
            } else {
                clearImage(materiHome.img_materi)
                const deletedMateri = await Materi.findByIdAndRemove(id)
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
    listMateri: async (req, res) => {
        dataMateri = await Materi.find(req.body)
        res.send({
            status: 200,
            error: null,
            response: dataMateri
        })
    }
}

const clearImage = filePath => {
    filePath = path.join(__dirname, '../public/images/materi/', filePath)
    fs.unlink(filePath, err => {
        if (err) throw err
    })
}