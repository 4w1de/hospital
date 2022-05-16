const Customer = require('../../models/Customer');

const updateById = async (id, newCustomer) => {
    const { name, email, phone, address } = newCustomer;
    const customer = await Customer.query().where('id', id).update({
        name,
        email,
        phone,
        address,
        last_update_timestamp: new Date(),
    });
    return customer;
};

module.exports = updateById;
