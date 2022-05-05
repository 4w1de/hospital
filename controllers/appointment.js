const Appointment = require('../models/Appointment');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async (req, res) => {
    try {
        const { page = 1 } = req.query;
        const { results: appointment, total } = await Appointment.query()
            .withGraphFetched('[customer, employee]')
            .orderBy('last_update_timestamp', 'desc')
            .page(page - 1, 5);
        res.status(200).json({ appointment, total });
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.getById = async (req, res) => {
    try {
        const { id } = req.params;
        const appointment = await Appointment.query().where('id', id).first();
        res.status(200).json(appointment);
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.add = async (req, res) => {
    try {
        const { id, date, start, end, employeeId, customerId } = req.body;

        const appointment = await Appointment.query().insert({
            id,
            date,
            start,
            end,
            employeeId,
            customerId,
        });
        res.status(201).json(appointment);
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        const appointment = await Appointment.query().where('id', id).del();
        res.status(200).json({ message: 'deleted' });
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.updateById = async (req, res) => {
    try {
        const { id } = req.params;
        const { date, start, end, employeeId, customerId } = req.body;
        const appointment = await Appointment.query().where('id', id).update({
            date,
            start,
            end,
            employeeId,
            customerId,
            last_update_timestamp: new Date(),
        });
        res.status(200).json(appointment);
    } catch (e) {
        errorHandler(res, e);
    }
};
