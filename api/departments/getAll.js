const Departments = require('../../models/Departments');

const getAll = async () => {
    const departments = await Departments.query();
    return departments;
};

module.exports = getAll;
