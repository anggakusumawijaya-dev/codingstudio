const Contact = require('../model/contact')

module.exports = {
    addContact: async (req, res) => {
        const addContact = await Contact.create(req.body)
        res.status(201).json({
            error: null,
            message: 'Successfully saved data',
            response: addContact
        })
    },
    detailContact: async (req, res) => {
        const { id } = req.params
        const detailContact = await Contact.findById(id)
        res.status(200).json({
            error: null,
            message: 'Successfully retrieve data',
            response: detailContact
        })
    },
    updateContact: async (req, res) => {
        const { id } = req.params
        Contact.findById(id)
        .then(async contact => {
            if (!contact) {
                res.status(404).json({
                    message: 'Data not found'
                })
            } else {
                const updatedContact = await Contact.updateOne(req.body)
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
    deleteContact: async (req, res) => {
        const { id } = req.params
        Contact.findById(id)
        .then(async contact => {
            if (!contact) {
                res.status(200).json({
                    error: 'Data not found'
                })
            } else {
                const deletedContact = await Contact.findByIdAndRemove(id)
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
    listContact: async (req, res) => {
        const listContact = await Contact.find()
        res.status(200).json({
            error: null,
            message: 'Successfully retrieve data',
            response: listContact
        })
    }
}