const { Model } = require('objection');

class Departments extends Model {
    static get tableName() {
        return 'DEPARTMENTS';
    }
}

module.exports = Departments;
