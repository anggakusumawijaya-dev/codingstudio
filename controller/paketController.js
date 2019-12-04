const fs = require('fs')
const path = require('path')
const Paket = require('../model/paket')

module.exports = {
    addPaket: async (req, res) => {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            })
        } else {
            let { img_paket } = req.files
            img_paket.mv('./public/images/paket/' + img_paket.name)
            const paket = new Paket ({
                nm_paket: req.body.nm_paket,
                img_paket: img_paket.name,
                desc_paket: req.body.desc_paket,
                hrg_paket: req.body.desc_Paket,
                status_paket: req.body.status_paket
            })
            const savedPaket = await paket.save()
            res.send({
                status: 201,
                message: 'File is uploaded',
                data_img: {
                    name: img_paket.name,
                    mimetype: img_paket.mimetype,
                    size: img_paket.size
                },
                response: paket
            })
        }
    },
    detailPaket: async (req, res) => {
        const { id } = req.params
        const paket = await Paket.findById(id)
        res.send({
            status: 200,
            error: null,
            response: paket
        })
    },
    uppdatePaket: async (req, res) => {
        const { id } = req.params
        Paket.findById(id)
        .then( async paket => {
            if (!paket) {
                res.send({
                    status: 404,
                    error: 'Data not found'
                })
            } else {
                if (req.files) {
                    let { img_paket } = req.files
                    let path = `./public/images/paket/${img_paket.name}`
                    img_paket.mv(path, async (err) => {
                        if (err) {
                            console.log(err)
                        } else {
                            const updPaket = {
                                nm_paket: req.body.nm_paket,
                                img_paket: img_paket.name,
                                desc_paket: req.body.desc_paket,
                                hrg_paket: req.body.hrg_paket,
                                status_paket: req.body.status_paket
                            }
                            const updatedPaket = await Paket.updateOne({ _id: id}, updPaket)
                        }
                    })
                } else {
                    const updPaket = {
                        nm_paket: req.body.nm_paket,
                        desc_paket: req.body.desc_paket,
                        hrg_paket: req.body.hrg_paket,
                        status_paket: req.body.status_paket
                    }
                    const updatedPaket = await Paket.updateOne({ _id: id}, updPaket)
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
    deletePaket: async (req, res) => {
        const { id } = req.params
        Paket.findById(id)
        .then( async paket => {
            if (!paket) {
                res.send({
                    status: 404,
                    error: 'File not found'
                })
            } else {
                clearImage(paket.img_paket)
                const deletedPaket = await Paket.findByIdAndRemove(id)
            }
        })
        .then(result => {
            res.send({
                status: 200,
                error: null,
                message: 'File is deleted'
            })
        })
        .catch(er => {
            res.send({
                status: 400,
                error: 'Failed to delete file'
            })
        })
    },
    listPaket: async (req, res) => {
        dataPaket = await Paket.find(req.body)
        res.send({
            status: 200,
            error: null,
            response: dataPaket
        })
    }
}

const clearImage = filePath => {
    filePath = path.join(__dirname, '../public/images/paket/', filePath)
    fs.unlink(filePath, err => {
        if (err) throw err
    })
}