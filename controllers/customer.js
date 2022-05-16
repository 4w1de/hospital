const Customer = require('../models/Customer');
const errorHandler = require('../utils/errorHandler');
const customerAPI = require('../api/customer');

module.exports.getAll = async (req, res) => {
    try {
        const { page = 1, size = 1000 } = req.query;

        customerAPI.getAll(page, size).then((response) => {
            res.status(200).json(response);
        });
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.getById = async (req, res) => {
    try {
        const { id } = req.params;

        customerAPI.getById(id).then((response) => {
            res.status(200).json(response);
        });
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.add = async (req, res) => {
    try {
        const { email } = req.body;
        const existsCustomer = await Customer.query()
            .where('email', email)
            .first();

        if (existsCustomer) {
            throw new Error('Customer already exists');
        }

        customerAPI.add(req.body).then((response) => {
            res.status(200).json(response);
        });
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.deleteById = async (req, res) => {
    try {
        const { id } = req.params;

        customerAPI.deleteById(id).then((response) => {
            res.status(200).json({ message: 'deleted' });
        });
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.updateById = async (req, res) => {
    try {
        const { id } = req.params;

        customerAPI.updateById(id, req.body).then((response) => {
            res.status(200).json(response);
        });
    } catch (e) {
        errorHandler(res, e);
    }
};
