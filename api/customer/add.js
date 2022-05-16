const Customer = require('../../models/Customer');

const add = async (newCustomer) => {
    const { id, name, email, phone, address } = newCustomer;
    const customer = await Customer.query().insert({
        id,
        name,
        email,
        phone,
        address,
    });
    return customer;
};

module.exports = add;
