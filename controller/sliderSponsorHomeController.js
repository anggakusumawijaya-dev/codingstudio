const fs = require('fs')
const path = require('path')
const Sponsor = require('../model/sliderSponsorHome')

module.exports = {
    addSponsor: async (req, res) => {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            })
        } else {
            let { img_sponsor } = req.files
            img_sponsor.mv(`./public/images/sponsor/${img_sponsor.name}`)
            const sponsor = new Sponsor ({
                nm_sponsor: req.body.nm_sponsor,
                img_sponsor: img_sponsor.name,
                status_sponsor: req.body.status_sponsor
            })
            const savedSponsor = await sponsor.save()
            res.send({
                status: 201,
                message: 'File is uploaded',
                data_img: {
                    name: img_sponsor.name,
                    mimetype: img_sponsor.mimetype,
                    size: img_sponsor.size
                },
                response: sponsor
            })
        }
    },
    detailSponsor: async (req, res) => {
        const sponsor = await Sponsor.findById(req.params.id)
        res.send({
            status: 200,
            error: null,
            response: sponsor
            
        })
    },
    updateSponsor: async (req, res) => {
        const { id } = req.params
        Sponsor.findById(id)
        .then( async sponsorHome => {
            if (!sponsorHome) {
                res.send({
                    status: 404,
                    error: 'Data not found'
                })
            } else {
                if (req.files) {
                    let { img_sponsor } = req.files
                    let path = `./public/images/sponsor/${img_sponsor.name}`
                    clearImage(sponsorHome.img_sponsor)
                    img_sponsor.mv(path, async (err) => {
                        if (err) {
                            console.log(err)
                        } else {
                            const updSponsor = {
                                nm_sponsor: req.body.nm_sponsor,
                                img_sponsor: img_sponsor.name,
                                status_sponsor: req.body.status_sponsor
                            }
                            const updatedSponsor = await Sponsor.updateOne({ _id: id }, updSponsor)
                        }
                    })
                } else {
                    const updSponsor = {
                        nm_sponsor: req.body.nm_sponsor,
                        status_sponsor: req.body.status_sponsor
                    }
                    const updatedSponsor = await Sponsor.updateOne({ _id: id }, updSponsor)
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
    delete: async (req, res) => {
        const { id } = req.params
        Sponsor.findById(id)
        .then( async sponsorHome => {
            if (!sponsorHome) {
                res.send({
                    status: 404,
                    error: 'Not found'
                })
            } else {
                clearImage(sponsorHome.img_sponsor)
                const deletedSponsor = await Sponsor.findByIdAndRemove(id)
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
    listSponsor: async (req, res) => {
        dataSponsor = await Sponsor.find(req.body)
        res.send({
            status: 200,
            error: null,
            response: dataSponsor
        })
    }
}

const clearImage = filePath => {
    filePath = path.join(__dirname, '../public/images/sponsor/', filePath)
    fs.unlink(filePath, err => {
        if (err) throw err
    })
}