const Employee = require('../../models/Employee');
const Users = require('../../models/Users');

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const add = async (newEmployee) => {
    const { id, name, email, phone, address, departmentId, password } =
        newEmployee;
    const employee = await Employee.query().insert({
        id,
        name,
        email,
        phone,
        address,
        departmentId,
    });
    await Users.query().insert({
        id,
        employeeId: id,
        password: bcrypt.hashSync(password, salt),
        role: 2,
    });
    return employee;
};

module.exports = add;
