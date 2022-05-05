const Employee = require('../models/Employee');
const Users = require('../models/Users');
const errorHandler = require('../utils/errorHandler');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

module.exports.getAll = async (req, res) => {
    try {
        const employee = await Employee.query()
            .orderBy('last_update_timestamp', 'desc')
            .withGraphFetched('departments');
        res.status(200).json(employee);
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.getById = async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.query().where('id', id).first();
        res.status(200).json(employee);
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.add = async (req, res) => {
    try {
        const { id, name, email, phone, address, departmentId, password } =
            req.body;
        const existsEmployee = await Employee.query()
            .where('email', email)
            .first();

        if (existsEmployee) {
            throw new Error('Customer already exists');
        }

        const employee = await Employee.query().insert({
            id,
            name,
            email,
            phone,
            address,
            departmentId,
        });
        await Users.query().insert({
            id,
            employeeId: id,
            password: bcrypt.hashSync(password, salt),
            role: 2,
        });
        res.status(201).json(employee);
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        await Employee.query().where('id', id).del();
        res.status(200).json({ message: 'deleted' });
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.updateById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone, address, departmentId, password } =
            req.body;
        const employee = await Employee.query().where('id', id).update({
            name,
            email,
            phone,
            address,
            departmentId,
            last_update_timestamp: new Date(),
        });
        await Users.query().where('employeeId', id).update({
            password,
        });
        res.status(200).json(employee);
    } catch (e) {
        errorHandler(res, e);
    }
};
