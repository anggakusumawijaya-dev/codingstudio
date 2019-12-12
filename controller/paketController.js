const Paket = require('../model/paket')

module.exports = {
    addPaket: async (req, res) => {
        const addPaket = await Paket.create(req.body)
        res.status(201).json({
            error: null,
            message: 'Successfully saved data',
            response: addPaket
        })
    },
    detailPaket: async (req, res) => {
        const { id } = req.params
        const detailPaket = await Paket.findById(id)
        .populate('list_materi', 'nm_materi')
        res.status(200).json({
            error: null,
            message: 'Successfully retrieve data',
            response: detailPaket
        })
        // dataPaket = await DetailPaket.find()
        // .populate('id_paket', 'nm_paket')
        // .populate('id_materi','nm_materi')
        // res.status(200).json({
        //     error: null,
        //     response: dataPaket
        // })
    },
    updatePaket: async (req, res) => {
        const { id } = req.params
        Paket.findById(id)
        .then(async paket => {
            if (!paket) {
                res.status(404).json({
                    message: 'Data not found'
                })
            } else {
                const updatedPaket = await Paket.updateOne(req.body)
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
    deletePaket: async (req, res) => {
        const { id } = req.params
        Paket.findById(id)
        .then(async paket => {
            if (!paket) {
                res.status(404).json({
                    error: 'Data not found'
                })
            } else {
                const deletePaket = await Paket.findByIdAndRemove(id)
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
    listPaket: async (req, res) => {
        const dataPaket = await Paket.find()
        .populate('list_materi', 'nm_materi')
        res.status(200).json({
            error: null,
            message: 'Successfully retrieve data',
            response: dataPaket
        })
    }
}