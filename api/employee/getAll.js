const Employee = require('../../models/Employee');

const getAll = async () => {
    const employee = await Employee.query()
        .orderBy('last_update_timestamp', 'desc')
        .withGraphFetched('departments');
    return employee;
};

module.exports = getAll;
