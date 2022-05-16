const Appointment = require('../../models/Appointment');

const deleteById = async (id) => {
    const appointment = await Appointment.query().where('id', id).del();
    return appointment;
};

module.exports = deleteById;
