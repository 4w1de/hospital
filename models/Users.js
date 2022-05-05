const { Model } = require('objection');

class Users extends Model {
    static get tableName() {
        return 'USERS';
    }
    static get relationMappings() {
        const Employee = require('./Employee');
        return {
            employee: {
                relation: Model.HasManyRelation,
                modelClass: Employee,
                join: {
                    from: 'USERS.employeeId',
                    to: 'EMPLOYEE.id',
                },
            },
        };
    }
}

module.exports = Users;
