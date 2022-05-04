const Appointment = require('../models/Customer');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async (req, res) => {
    try {
        const appointment = await Appointment.query();
        res.status(200).json(appointment);
    } catch (e) {
        errorHandler(res, e);
    }
}
module.exports.getById = async (req, res) => {
    try {
        const { id } = req.params;
        const appointment = await Appointment.query().where('id', id).first();
        res.status(200).json(appointment);
    } catch (e) {
        errorHandler(res, e);
    }
}
module.exports.add = async (req, res) => {
    try {
        const {date, start, end, employeeId, customerId} = req.body;

        const appointment = await Appointment.query().insert({
            date: date,
            start: start,
            end: end,
            employeeId: employeeId,
            customerId: customerId,
        });
        res.status(201).json(appointment);
    } catch (e) {
        errorHandler(res, e);
    }
}
module.exports.deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        const appointment = await Appointment.query().where('id', id).del();
        res.status(200).json(appointment);
    } catch (e) {
        errorHandler(res, e);
    }
}
module.exports.updateById = async (req, res) => {
    try {
        const {id} = req.params;
        const {date, start, end, employeeId, customerId} = req.body;
        const appointment = await Appointment.query().where('id', id).update({
            date: date,
            start: start,
            end: end,
            employeeId: employeeId,
            customerId: customerId,
            last_update_timestamp: new Date()
        })
        res.status(200).json(appointment);
    } catch (e) {
        errorHandler(res, e);
    }
}