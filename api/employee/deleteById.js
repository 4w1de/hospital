const Employee = require('../../models/Employee');

const deleteById = async (id) => {
    const employee = await Employee.query().where('id', id).del();
    return employee;
};

module.exports = deleteById;
