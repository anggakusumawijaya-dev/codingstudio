const fs = require('fs')
const path = require('path')
const Contact = require('../model/contact')

module.exports = {
    addContact: async (req, res) => {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No data received'
            })
        } else {
            const contact = new Contact ({
                nm_kontak: req.body.nm_kontak,
                email_contact: req.body.email_contact,
                msg_contact: req.body.msg_contact
            })
            const savedContact = await contact.save()
            res.send({
                status: 201,
                message: 'Data received',
                response: contact
            })
        }
    },
    detailContact: async (req, res) => {
        const { id } = req.params
        const contact = await Contact.findById(id)
        res.send({
            status: 200,
            error: null,
            response: contact
        })
    },
    deleteContact: async (req, res) => {
        const { id } = req.params
        Contact.findById(id)
        .then( async contact => {
            if (!contact) {
                res.send({
                    status: 404,
                    error: 'Data not found'
                })
            } else {
                const deletedContact = await Contact.findByIdAndRemove(id)
            }
        })
        .then(result => {
            res.send({
                status: 200,
                error: null,
                message: 'Data is deleted'
            })
        })
        .catch(err => {
            res.send({
                status: 400,
                error: 'Failed to delete data'
            })
        })
    },
    listContact: async (req, res) => {
        dataContact = await Contact.find(req.body)
        res.send({
            status: 200,
            error: null,
            response: dataContact
        })
    }
}