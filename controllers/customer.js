const Customer = require('../models/Customer');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async (req, res) => {
    try {
        const customers = await Customer.query();
        res.status(200).json(customers);
    } catch (e) {
        errorHandler(res, e);
    }
}
module.exports.getById = async (req, res) => {
    try {
        const { id } = req.params;
        const customer = await Customer.query().where('id', id).first();
        res.status(200).json(customer);
    } catch (e) {
        errorHandler(res, e);
    }
}
module.exports.add = async (req, res) => {
    try {
        const {name, email, phone, address} = req.body;
        const existsCustomer = await Customer.query().where('email', email).first();

        if(existsCustomer) {
            throw new Error("Customer already exists");
        }

        const customer = await Customer.query().insert({
            name: name,
            email: email,
            phone: phone,
            address: address,
        });
        res.status(201).json(customer);
    } catch (e) {
        errorHandler(res, e);
    }
}
module.exports.deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        const customer = await Customer.query().where('id', id).del();
        res.status(200).json(customer);
    } catch (e) {
        errorHandler(res, e);
    }
}
module.exports.updateById = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, email, phone, address} = req.body;
        const customer = await Customer.query().where('id', id).update({
            name: name,
            email: email,
            phone: phone,
            address: address,
            last_update_timestamp: new Date()
        })
        res.status(200).json(customer);
    } catch (e) {
        errorHandler(res, e);
    }
}