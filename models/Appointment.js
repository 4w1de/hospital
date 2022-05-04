const {Model} = require('objection');

class Appointment extends Model {
    static get tableName() {
        return 'APPOINTMENT';
    }
    static get relationMappings() {
        const Customer = require('./Customer');
        const Employee = require('./Employee');
        return {
            customer: {
                relation: Model.HasOneRelation,
                modelClass: Customer,
                join: {
                    from: 'APPOINTMENT.customerId',
                    to: 'CUSTOMER.id',
                },
            },
            employee: {
                relation: Model.BelongsToOneRelation,
                modelClass: Employee,
                join: {
                    from: 'APPOINTMENT.employeeId',
                    to: 'EMPLOYEE.id',
                },
            },
        };
    }
}

module.exports = Appointment;