const Appointment = require('../../models/Appointment');

const getById = async (id) => {
    const appointment = await Appointment.query().where('id', id).first();
    return appointment;
};

module.exports = getById;
