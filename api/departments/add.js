const Departments = require('../../models/Departments');

const add = async (newDepartment) => {
    const { id, name, address } = newDepartment;
    const department = await Departments.query().insert({
        id,
        name,
        address,
    });
    return department;
};

module.exports = add;
