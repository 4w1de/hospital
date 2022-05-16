const Employee = require('../../models/Employee');

const updateById = async (id, newEmployee) => {
    const { name, email, phone, address, departmentId } = newEmployee;
    const employee = await Employee.query().where('id', id).update({
        name,
        email,
        phone,
        address,
        departmentId,
        last_update_timestamp: new Date(),
    });
    return employee;
};

module.exports = updateById;
