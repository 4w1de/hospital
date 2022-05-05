const { Model } = require('objection');

class Employee extends Model {
    static get tableName() {
        return 'EMPLOYEE';
    }
    static get relationMappings() {
        const Departments = require('./Departments');
        return {
            departments: {
                relation: Model.HasOneRelation,
                modelClass: Departments,
                join: {
                    from: 'EMPLOYEE.departmentId',
                    to: 'DEPARTMENTS.id',
                },
            },
        };
    }
}

module.exports = Employee;
