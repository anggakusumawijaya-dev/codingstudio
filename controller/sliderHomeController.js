const fs = require('fs')
const path = require('path')
const Slider = require('../model/sliderHome')

module.exports = {
    addSlider: async (req, res) => {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            })
        } else {
            // Use the name of the input field (i.e. "img_slider") to retrieve the uploaded file
            let { img_slider } = req.files          
            // Use the mv() method to place the file in upload directory (i.e. "uploads")
            img_slider.mv('./public/images/sliders/' + img_slider.name)
            const slider = new Slider ({
                nm_slider: req.body.nm_slider,
                img_slider: img_slider.name,
                status_slider: req.body.status_slider,
            })
            const savedSlider = await slider.save()
            // Send response
            res.send({
                status: 201,
                message: 'File is uploaded',
                data_img: {
                    name: img_slider.name,
                    mimetype: img_slider.mimetype,
                    size: img_slider.size
                },
                response: slider
            })
        }
    },
    detailSlider: async (req, res) => {
        const slider = await Slider.findById(req.params.id)
        res.send({
            status: 200,
            error: null,
            response: slider
        })
    },
    updateSlider: async (req,res) => {
        const { id } = req.params
        Slider.findById(id)
        .then ( async sliderHome => {
            if (!sliderHome) {
                res.status(200)
                .json({ error: 'Data not found'})
            } else {
                if (req.files) {
                    let { img_slider } = req.files
                    let path = `./public/images/sliders/${img_slider.name}`
                    clearImage(sliderHome.img_slider)

                    img_slider.mv(path, async (err) => {
                        if (err) {
                            console.log(err)
                        } else {
                            const updSlider = {
                                nm_slider : req.body.nm_slider,
                                img_slider : img_slider.name,
                                status_slider : req.body.status_slider
                            }
                            const updatedSlider = await Slider.updateOne({_id: id}, updSlider)
                        }
                    })
                } else {
                    const updSlider = {
                        nm_slider : req.body.nm_slider,
                        status_slider : req.body.status_slider
                    }
                    const updatedSlider = await Slider.updateOne({_id: id}, updSlider)
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
    deleteSlider: async (req, res) => {
        const { id } = req.params
        Slider.findById(id)
        .then( async sliderHome => {
            if (!sliderHome) {
                res.json({ 
                    status: 404,
                    error: 'Not Found'
                })
            } else {
                clearImage(sliderHome.img_slider)
                const deletedSlider = await Slider.findByIdAndRemove(id)
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
    listSlider: async (req, res) => {
        dataSlider = await Slider.find(req.body)
        res.json({
            status: 200,
            error: null,
            response: dataSlider
        })
    }
}

const clearImage = filePath => {
    filePath = path.join(__dirname, '../public/images/sliders/', filePath)
    fs.unlink(filePath, err => {
        if (err) throw err
    })
}