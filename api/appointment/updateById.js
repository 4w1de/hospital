const Appointment = require('../../models/Appointment');

const updateById = async (id, newAppointment) => {
    const { date, start, end, employeeId, customerId } = newAppointment;
    const appointment = await Appointment.query().where('id', id).update({
        date,
        start,
        end,
        employeeId,
        customerId,
        last_update_timestamp: new Date(),
    });
    return appointment;
};

module.exports = updateById;
