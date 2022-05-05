const Customer = require('../models/Customer');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async (req, res) => {
    try {
        const { page = 1, size = 1000 } = req.query;
        const { results: customer, total } = await Customer.query()
            .orderBy('last_update_timestamp', 'desc')
            .page(page - 1, size);
        res.status(200).json({ customer, total });
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.getById = async (req, res) => {
    try {
        const { id } = req.params;
        const customer = await Customer.query().where('id', id).first();
        res.status(200).json(customer);
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.add = async (req, res) => {
    try {
        const { id, name, email, phone, address } = req.body;
        const existsCustomer = await Customer.query()
            .where('email', email)
            .first();

        if (existsCustomer) {
            throw new Error('Customer already exists');
        }

        const customer = await Customer.query().insert({
            id,
            name,
            email,
            phone,
            address,
        });
        res.status(201).json(customer);
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        await Customer.query().where('id', id).del();
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.updateById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone, address } = req.body;
        const customer = await Customer.query().where('id', id).update({
            name,
            email,
            phone,
            address,
            last_update_timestamp: new Date(),
        });
        res.status(200).json(customer);
    } catch (e) {
        errorHandler(res, e);
    }
};
