const Slider = require('../model/sliderHome')

module.exports = {
    addSlider: async (req, res) => {
        const addSlider = await Slider.create(req.body)
        res.status(201).json({
            error: null,
            message: 'Successfully upload file',
            response: addSlider
        })
    },
    detailSlider: async (req, res) => {
        const { id } = req.params
        const detailSlider = await Slider.findById(id)
        res.status(200).json({
            error: null,
            message: 'Successfully retrieve data',
            response: detailSlider
        })
    },
    updateSlider: async (req,res) => {
        const { id } = req.params
        Slider.findById(id)
        .then(async slider => {
            if (!slider) {
                res.status(400).json({
                    message: 'Data not found'
                })
            } else {
                const updatedSlider = await Slider.updateOne(req.body)
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
    deleteSlider: async (req, res) => {
        const { id } = req.params
        Slider.findById(id)
        .then( async slider => {
            if (!slider) {
                res.status(404).json({
                    error: 'File not found'
                })
            } else {
                const deleteSlider = await Slider.findByIdAndRemove(id)
                
            }
        })
        .then(result => {
            res.status(200).json({
                error: null,
                message: 'Successfully delete a file'
            })
        })
        .catch(er => {
            res.status(400).json({
                error: 'Failed to delete file'
            })
        })
    },
    listSlider: async (req, res) => {
        const listSlider = await Slider.find()
        res.status(200).json({
            error: null,
            message: 'Successfully retrieve data',
            response: listSlider
        })
    }
}