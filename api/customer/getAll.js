const Customer = require('../../models/Customer');

const getAll = async (page = 1, size = 1000) => {
    const { results: customer, total } = await Customer.query()
        .orderBy('last_update_timestamp', 'desc')
        .page(page - 1, size);
    return { customer, total };
};

module.exports = getAll;
