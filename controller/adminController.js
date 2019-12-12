const Admin = require('../model/admin')

module.exports = {
    addAdmin: async (req, res) => {
        const addAdmin = await Admin.create(req.body)
        res.status(201).json({
            error: null,
            message: 'Successfully saved data',
            response: addAdmin
        })
    },
    detailAdmin: async (req, res) => {
        const { id } = req.params
        const detailAdmin = await Admin.findById(id)
        res.status(200).json({
            error: null,
            message: 'Successfully retrieve data',
            response: detailAdmin
        })
    },
    updatesAdmin: async (req, res) => {
        const { id } = req.params
        Admin.findById(id)
        .then(async admin => {
            if (!admin) {
                res.status(400).json({
                    message: 'Data not found'
                })
            } else {
                const updatedAdmin = await Admin.updateOne(req.body)
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
    deleteAdmin: async (req, res) => {
        const { id } = req.params
        Admin.findById(id)
        .then(async admin => {
            if (!admin) {
                res.status(404).json({
                    error: ' Data not found'
                })
            } else {
                const deleteAdmin = await Admin.findByIdAndRemove(id)
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
    listAdmin: async (rq, res) => {
        const listAdmin = await Admin.find()
        res.status(200).json({
            error: null,
            message: 'Successfully retrieve data',
            response: listAdmin
        })
    }
}