const Employee = require('../../models/Employee');

const getById = async (id) => {
    const employee = await Employee.query().where('id', id).first();
    return employee;
};

module.exports = getById;
