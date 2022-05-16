const Employee = require('../models/Employee');
const Users = require('../models/Users');
const errorHandler = require('../utils/errorHandler');
const employeeAPI = require('../api/employee');

module.exports.getAll = async (req, res) => {
    try {
        employeeAPI.getAll().then((response) => {
            res.status(200).json(response);
        });
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.getById = async (req, res) => {
    try {
        const { id } = req.params;

        employeeAPI.getById(id).then((response) => {
            res.status(200).json(response);
        });
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.add = async (req, res) => {
    try {
        const { email } = req.body;
        const existsEmployee = await Employee.query()
            .where('email', email)
            .first();

        if (existsEmployee) {
            throw new Error('Customer already exists');
        }

        employeeAPI.add(req.body).then((response) => {
            res.status(200).json(response);
        });
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.deleteById = async (req, res) => {
    try {
        const { id } = req.params;

        employeeAPI.deleteById(id).then((response) => {
            res.status(200).json({ message: 'deleted' });
        });
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.updateById = async (req, res) => {
    try {
        const { id } = req.params;

        employeeAPI.updateById(id, req.body).then((response) => {
            res.status(200).json(response);
        });
    } catch (e) {
        errorHandler(res, e);
    }
};
