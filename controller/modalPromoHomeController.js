const ModalPromo = require('../model/modalPromoHome')

module.exports = {
    addModalPromo: async (req, res) => {
        const addModalPromo = await ModalPromo.create(req.body)
        res.status(201).json({
            error: null,
            message: 'Successfully saved file',
            response: addModalPromo
        })
    },
    detailModalPromo: async (req, res) => {
        const { id } = req.params
        const detailModalPromo = await ModalPromo.findById(id)
        res.status(200).json({
            error: null,
            message: 'Successfully retrieve file',
            response: detailModalPromo
        })
    },
    updateModalPromo: async (req, res) => {
        const { id } = req.params
        ModalPromo.findById(id)
        .then(async modalPromo => {
            if (!modalPromo) {
                res.status(404).json({
                    message: 'Data not found'
                })
            } else {
                const updatedModalPromo = await ModalPromo.updateOne(req.body)
            }
        })
        .then(result => {
            res.status(200).json({
                error: null,
                message: 'Successfully update file',
            })
        })
        .catch(err => {
            res.status(400).json({
                error: 'Failed to update file'
            })
        })
    },
    deleteModalPromo: async (req, res) => {
        const { id } = req.params
        ModalPromo.findById(id)
        .then( async modalPromoHome => {
            if(!modalPromoHome) {
                res.status(404).json({
                    error: 'File not found'
                })
            } else {
                const deletedModalPromo = await ModalPromo.findByIdAndRemove(id)
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
    listModalPromo: async (req, res) => {
        const dataModalPromo = await ModalPromo.find()
        res.status(200).json({
            error: null,
            message: 'Successfully retrieve file',
            response: dataModalPromo
        })
    }
}