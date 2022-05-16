const Departments = require('../models/Departments');
const errorHandler = require('../utils/errorHandler');
const departmentsAPI = require('../api/departments');

module.exports.getAll = async (req, res) => {
    try {
        departmentsAPI.getAll().then((response) => {
            res.status(200).json(response);
        });
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.getById = async (req, res) => {
    try {
        const { id } = req.params;

        departmentsAPI.getById(id).then((response) => {
            res.status(200).json(response);
        });
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.add = async (req, res) => {
    try {
        const { name, address } = req.body;
        const existsDepartment = await Departments.query()
            .where({
                name,
                address,
            })
            .first();

        if (existsDepartment) {
            throw new Error('Department already exists');
        }

        departmentsAPI.add(req.body).then((response) => {
            res.status(200).json(response);
        });
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.deleteById = async (req, res) => {
    try {
        const { id } = req.params;

        departmentsAPI.deleteById(id).then((response) => {
            res.status(200).json(response);
        });
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.updateById = async (req, res) => {
    try {
        const { id } = req.params;

        departmentsAPI.updateById(id, req.body).then((response) => {
            res.status(200).json(response);
        });
    } catch (e) {
        errorHandler(res, e);
    }
};
