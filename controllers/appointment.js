const Appointment = require('../models/Appointment');
const errorHandler = require('../utils/errorHandler');
const appointmentAPI = require('../api/appointment');

module.exports.getAll = async (req, res) => {
    try {
        const { page = 1 } = req.query;
        appointmentAPI.getAll(page).then((response) => {
            res.status(200).json(response);
        });
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.getById = async (req, res) => {
    try {
        const { id } = req.params;
        appointmentAPI.getById(id).then((response) => {
            res.status(200).json(response);
        });
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.add = async (req, res) => {
    try {
        appointmentAPI.add(req.body).then((response) => {
            res.status(201).json(response);
        });
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        appointmentAPI.deleteById(id).then((response) => {
            res.status(200).json({ message: 'deleted' });
        });
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.updateById = async (req, res) => {
    try {
        const { id } = req.params;
        appointmentAPI.updateById(id, req.body).then((response) => {
            res.status(200).json(response);
        });
    } catch (e) {
        errorHandler(res, e);
    }
};
