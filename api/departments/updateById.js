const Departments = require('../../models/Departments');

const updateById = async (id, newDepartment) => {
    const { name, address } = newDepartment;
    const department = await Departments.query().where('id', id).update({
        name,
        address,
        last_update_timestamp: new Date(),
    });
    return department;
};

module.exports = updateById;
