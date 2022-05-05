exports.up = (knex) =>
    knex.schema.createTable('APPOINTMENT', (table) => {
        table.integer('id').notNullable().unique();
        table.date('date').notNullable();
        table.time('start').notNullable();
        table.time('end').notNullable();
        table
            .integer('employeeId')
            .unsigned()
            .references('id')
            .inTable('EMPLOYEE')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table
            .integer('customerId')
            .unsigned()
            .references('id')
            .inTable('CUSTOMER')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table
            .timestamp('created_timestamp')
            .notNullable()
            .defaultTo(knex.fn.now());
        table
            .timestamp('last_update_timestamp')
            .notNullable()
            .defaultTo(knex.fn.now());
    });

exports.down = (knex) => knex.schema.dropTable('APPOINTMENT');
