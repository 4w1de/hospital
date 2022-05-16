const Departments = require('../../models/Departments');

const deleteById = async (id) => {
    const department = await Departments.query().where('id', id).del();
    return department;
};

module.exports = deleteById;
