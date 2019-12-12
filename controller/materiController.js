const Materi = require('../model/materi')

module.exports = {
    addMateri: async (req, res) => {
        const addMateri = await Materi.create(req.body)
        res.status(201).json({
            error: null,
            message: 'Successfully saved data',
            response: addMateri
        })
    },
    detailMateri: async (req, res) => {
        const { id } = req.params
        const detailMateri = await Materi.findById(id)
        res.status(200).json({
            error: null,
            message: 'Successfully retrieve data',
            response: detailMateri
        })
    },
    updateMateri: async (req,res) => {
        const { id } = req.params
        Materi.findById(id)
        .then(async materi => {
            if (!materi) {
                res.status(404).json({
                    message: 'Data not found'
                })
            } else {
                const updatedMateri = await Materi.updateOne(req.body)
            }
        })
        .then(result => {
            res.status(200).json({
                message: 'File is updated'
            })
        })
        .catch(err => {
            res.status(400).json({
                error: 'Failed to update file'
            })
        })
    },
    deleteMateri: async (req, res) => {
        const { id } = req.params
        Materi.findById(id)
        .then(async materiHome => {
            if (!materiHome) {
                res.status(404).json({
                    error: 'File not found'
                })
            } else {
                const deletedMateri = await Materi.findByIdAndRemove(id)
            }
        })
        .then(result => {
            res.status(200).json({
                error: null,
                message: 'File is deleted'
            })
        })
        .catch(er => {
            res.status(400).json({
                error: 'Failed to delete file'
            })
        })
    },
    listMateri: async (req, res) => {
        const dataMateri = await Materi.find()
        res.status(200).json({
            error: null,
            message: 'Successfully retrieve data',
            response: dataMateri
        })
    }
}