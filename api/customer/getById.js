const Customer = require('../../models/Customer');

const getById = async (id) => {
    const customer = await Customer.query().where('id', id).first();
    return customer;
};

module.exports = getById;
