const Customer = require('../../models/Customer');

const deleteById = async (id) => {
    const customer = await Customer.query().where('id', id).del();
    return customer;
};

module.exports = deleteById;
