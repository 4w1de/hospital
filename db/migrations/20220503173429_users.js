exports.up = (knex) =>
    knex.schema.createTable('USERS', (table) => {
        table.integer('id').notNullable().unique();
        table
            .integer('employeeId')
            .unsigned()
            .references('id')
            .inTable('EMPLOYEE')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.string('password').notNullable();
        table.integer('role').notNullable();
        table
            .timestamp('created_timestamp')
            .notNullable()
            .defaultTo(knex.fn.now());
        table
            .timestamp('last_update_timestamp')
            .notNullable()
            .defaultTo(knex.fn.now());
    });

exports.down = (knex) => knex.schema.dropTable('USERS');
