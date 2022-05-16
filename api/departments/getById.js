const Departments = require('../../models/Departments');

const getById = async (id) => {
    const department = await Departments.query().where('id', id).first();
    return department;
};

module.exports = getById;
