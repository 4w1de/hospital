const {Model} = require('objection');

class Customer extends Model {
    static get tableName() {
        return 'CUSTOMER';
    }
}

module.exports = Customer;