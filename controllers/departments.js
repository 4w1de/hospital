const Departments = require('../models/Departments');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async (req, res) => {
    try {
        const departments = await Departments.query();
        res.status(200).json(departments);
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.getById = async (req, res) => {
    try {
        const { id } = req.params;
        const department = await Departments.query().where('id', id).first();
        res.status(200).json(department);
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.add = async (req, res) => {
    try {
        const { id, name, address } = req.body;
        const existsDepartment = await Departments.query()
            .where({
                name,
                address,
            })
            .first();

        if (existsDepartment) {
            throw new Error('Department already exists');
        }

        const department = await Departments.query().insert({
            id,
            name,
            address,
        });
        res.status(201).json(department);
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        const department = await Departments.query().where('id', id).del();
        res.status(200).json(department);
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.updateById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, address } = req.body;
        const department = await Departments.query().where('id', id).update({
            name,
            address,
            last_update_timestamp: new Date(),
        });
        res.status(200).json(department);
    } catch (e) {
        errorHandler(res, e);
    }
};
