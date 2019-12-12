const FormPromo = require('../model/formPromoHome')

module.exports = {
    addFormPromo: async (req, res) => {
        const addFormPromo = await FormPromo.create(req.body)
        res.status(201).json({
            error: null,
            message: 'Successfully upload file',
            response: addFormPromo
        })
    },
    detailFormPromo: async (req, res) => {
        const { id } = req.params
        const detailFormPromo = await FormPromo.findById(id)
        .populate('id_promo', 'nm_promo')
        .populate('id_materi', 'nm_materi')
        res.status(200).json({
            error: null,
            message: 'Successfully retrieve data',
            response: detailFormPromo
        })
    },
    updateFormPromo: async (req, res) => {
        const { id } = req.params
        FormPromo.findById(id)
        .then(async formPromo => {
            if (!formPromo) {
                res.status(404).json({
                    message: 'Data not found'
                })
            } else {
                const updatedFormPromo = await FormPromo.updateOne(req.body)
            }
        })
        .then(result => {
            res.status(200).json({
                error: null,
                message: 'Successfully update data'
            })
        })
        .then(result => {
            res.status(200).json({
                message: 'Successfully update file',
                response: updateFormPromo
            })
        })
        .catch(err => {
            res.status(400).json({
                error: 'Failed to update file'
            })
        })
    },
    deleteFormPromo: async (req, res) => {
        const { id } = req.params
        FormPromo.findById(id)
        .then(async formPromo => {
            if (!formPromo) {
                res.status(404).json({
                    error: 'File not found'
                })
            } else {
                const deleteFormPromo = await FormPromo.findByIdAndRemove(id)
            }
        })
        .then(result => {
            res.status(200).json({
                error: null,
                message: 'File is deleted'
            })
        })
        .catch(err => {
            res.status(400).json({
                error: 'Failed to delete file'
            })
        })
    },
    listFormPromo: async (req, res) => {
        const listFormPromo = await FormPromo.find()
        res.status(200).json({
            error: null,
            message: 'Successfully retrieve file',
            response: listFormPromo
        })
    }
}