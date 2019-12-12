const HasilKarya = require('../model/hasilKarya')

module.exports = {
    addHasilKarya: async (req, res) => {
        const addHasilKarya = await HasilKarya.create(req.body)
        res.status(201).json({
            error: null,
            message: 'Successfully saved data',
            response: addHasilKarya
        })
    },
    detailHasilKarya: async (req, res) => {
        const { id } = req.params
        const detailHasilKarya = await HasilKarya.findById(id)
        .populate('id_user', 'username')
        res.status(200).json({
            error: null,
            message: 'Successfully retrieve data',
            response: detailHasilKarya
        })
    },
    updateHasilKarya: async (req, res) => {
        const { id } = req.params
        HasilKarya.findById(id)
        .then(async hasilKarya => {
            if (!hasilKarya) {
                res.status(404).json({
                    message: 'Data not found'
                })
            } else {
                const updatedHasilKarya = await HasilKarya.updateOne(req.body)
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
    deleteHasilKarya: async (req, res) => {
        const { id } = req.params
        HasilKarya.findById(id)
        .then(async hasilKarya => {
            if (!hasilKarya) {
                res.status(404).json({
                    error: 'Data not found'
                })
            } else {
                const deletedHasilKarya = await HasilKarya.findByIdAndRemove(id)
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
    listHasilKarya: async (req, res) => {
        const listHasilKarya = await HasilKarya.find()
        res.status(200).json({
            error: null,
            message: 'Successfully retrieve data',
            response: listHasilKarya
        })
    }
}