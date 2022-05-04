const Employee = require('../models/Customer');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async (req, res) => {
    try {
        const employee = await Employee.query();
        res.status(200).json(employee);
    } catch (e) {
        errorHandler(res, e);
    }
}
module.exports.getById = async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.query().where('id', id).first();
        res.status(200).json(employee);
    } catch (e) {
        errorHandler(res, e);
    }
}
module.exports.add = async (req, res) => {
    try {
        const {name, email, phone, address, departmentId} = req.body;
        const existsEmployee = await Employee.query().where('email', email).first();

        if(existsEmployee) {
            throw new Error("Customer already exists");
        }

        const employee = await Employee.query().insert({
            name: name,
            email: email,
            phone: phone,
            address: address,
            departmentId: departmentId,
        });
        res.status(201).json(employee);
    } catch (e) {
        errorHandler(res, e);
    }
}
module.exports.deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.query().where('id', id).del();
        res.status(200).json(employee);
    } catch (e) {
        errorHandler(res, e);
    }
}
module.exports.updateById = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, email, phone, address, departmentId} = req.body;
        const employee = await Employee.query().where('id', id).update({
            name: name,
            email: email,
            phone: phone,
            address: address,
            departmentId: departmentId,
            last_update_timestamp: new Date()
        })
        res.status(200).json(employee);
    } catch (e) {
        errorHandler(res, e);
    }
}