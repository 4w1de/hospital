const Appointment = require('../../models/Appointment');

const add = async (newAppointment) => {
    const { id, date, start, end, employeeId, customerId } = newAppointment;
    const appointment = await Appointment.query().insert({
        id,
        date,
        start,
        end,
        employeeId,
        customerId,
    });
    return appointment;
};

module.exports = add;
