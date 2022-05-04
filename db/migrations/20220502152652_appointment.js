exports.up = (knex) => 
    knex.schema.createTable('APPOINTMENT', (table) => {
        table.increments('id');
        table.date('date').notNullable();
        table.time('start').notNullable();
        table.time('end').notNullable();
        table.integer('employeeId').references('id').inTable('EMPLOYEE');
        table.integer('customerId').references('id').inTable('CUSTOMER');
        table
            .timestamp('created_timestamp')
            .notNullable()
            .defaultTo(knex.fn.now());
        table
            .timestamp('last_update_timestamp')
            .notNullable()
            .defaultTo(knex.fn.now());
    })

 exports.down = (knex) => knex.schema.dropTable('APPOINTMENT');
