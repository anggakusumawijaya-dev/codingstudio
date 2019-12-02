const fs = require('fs')
const path = require('path')
const ModalPromo = require('../model/modalPromoHome')

module.exports = {
    addModalPromo: async (req, res) => {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            })
        } else {
            let { img_promo } = req.files
            img_promo.mv('./public/images/promo/' + img_promo.name)
            const modalPromo = new ModalPromo ({
                nm_promo: req.body.nm_promo,
                img_promo: img_promo.name,
                status_promo: req.body.status_promo
            })
            const savedModalPromo = await modalPromo.save()
            res.send({
                status: 201,
                message: 'File is uploaded',
                data_img: {
                    name: img_promo.name,
                    mimetype: img_promo.mimetype,
                    size: img_promo.size
                },
                response: modalPromo
            })
        }
    },
    detailModalPromo: async (req, res) => {
        const modalPromo = await ModalPromo.findById(req.params.id)
        res.send({
            status: 200,
            error: null,
            response: modalPromo
        })
    },
    updateModalPromo: async (req, res) => {
        const { id } = req.params
        ModalPromo.findById(id)
        .then( async modalPromoHome => {
            if(!modalPromoHome) {
                res.status(200)
                .json({ error: 'File tidak di temukan'})
            } else {
                if(req.files) {
                    let { img_promo } = req.files
                    let path = './public/images/promo/' + img_promo.name
                    clearImage(modalPromoHome.img_promo)

                    img_promo.mv(path, async (err) => {
                        if(err) {
                            console.log(err)
                        } else {
                            const updModalPromo = {
                                nm_promo: req.body.nm_promo,
                                img_promo: img_promo.name,
                                status_promo: req.body.status_promo
                            }
                            const updatedModalPromo = await ModalPromo.updateOne({_id: id}, updModalPromo)
                        }
                    })
                } else {
                    const updModalPromo = {
                        nm_promo: req.body.nm_promo,
                        status_promo: req.body.status_promo
                    }
                    const updatedModalPromo = await ModalPromo.updateOne({_id: id}, updModalPromo)
                }
            }
        })
        .then(result => {
            res.json({
                status: 200,
                message: 'File is updated'
            })
        })
        .catch(err => {
            res.json({
                status: 400,
                error: 'Failed to update file'
            })
        })
    },
    deleteModalPromo: async (req, res) => {
        const { id } = req.params
        ModalPromo.findById(id)
        .then( async modalPromoHome => {
            if(!modalPromoHome) {
                res.json({ 
                    status: 404,
                    error: 'Not Found'
                })
            } else {
                clearImage(modalPromoHome.img_promo)
                const deletedModalPromo = await ModalPromo.findByIdAndRemove(id)
            }
        })
        .then(result => {
            res.json({
                status: 200,
                error: null,
                message: 'File is deleted'
            })
        })
        .catch(err => {
            res.json({
                status: 400,
                error: 'Failed to delete file'
            })
        })
    },
    listModalPromo: async (req, res) => {
        dataModalPromo = await ModalPromo.find(req.body)
        res.json({
            status: 200,
            error: null,
            response: dataSlider
        })
    }
}
const clearImage = filePath => {
    filePath = path.join(__dirname, '../public/images/promo', filePath)
    fs.unlink(filePath, err => {
        if (err) throw err
    })
}