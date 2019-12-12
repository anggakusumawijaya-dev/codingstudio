const Sponsor = require('../model/sliderSponsorHome')

module.exports = {
    addSponsor: async (req, res) => {
        const addSponsor = await Sponsor.create(req.body)
        res.status(201).json({
            error: null,
            message: 'Successfully upload a file',
            response: addSponsor
        })
    },
    detailSponsor: async (req, res) => {
        const { id } = req.params
        const detailSponsor = await Sponsor.findById(id)
        res.status(200).json({
            error: null,
            response: detailSponsor
            
        })
    },
    updateSponsor: async (req, res) => {
        const { id } = req.params
        Sponsor.findById(id)
        .then(async sponsor => {
            if (!sponsor) {
                res.status(404).json({
                    message: 'File not found'
                })
            } else {
                const deleteSponsor = await Sponsor.updateOne(req.body)
                
            }
        })
        .then(result => {
            res.status(200).json({
                error: null,
                message: 'Successfully update file'
            })
        })
        .catch(er => {
            res.status(400).json({
                error: 'Failed to update file'
            })
        })
    },
    deleteSponsor: async (req, res) => {
        const { id } = req.params
        Sponsor.findById(id)
        .then(async sponsor => {
            if (!sponsor) {
                res.status(404).json({
                    error: 'File not found'
                })
            } else {
                const deleteSponsor = await Sponsor.findByIdAndRemove(id)
                
            }
        })
        .then(result => {
            res.status(200).json({
                error: null,
                message: 'Successfully delete file'
            })
        })
        .catch(er => {
            res.status(400).json({
                error: 'Failed to delete file'
            })
        })
    },
    listSponsor: async (req, res) => {
        const dataSponsor = await Sponsor.find(req.body)
        res.status(200).json({
            error: null,
            message: 'Successfully retrieve file',
            response: dataSponsor
        })
    }
}