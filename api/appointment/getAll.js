const Appointment = require('../../models/Appointment');

const getAll = async (page = 1) => {
    const { results: appointment, total } = await Appointment.query()
        .withGraphFetched('[customer, employee]')
        .orderBy('last_update_timestamp', 'desc')
        .page(page - 1, 5);
    return { appointment, total };
};

module.exports = getAll;
