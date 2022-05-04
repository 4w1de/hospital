exports.up = (knex) => 
    knex.schema.createTable('DEPARTMENTS', (table) => {
        table.increments('id');
        table.string('name').notNullable();
        table.string('address', 500).notNullable();
        table
            .timestamp('created_timestamp')
            .notNullable()
            .defaultTo(knex.fn.now());
        table
            .timestamp('last_update_timestamp')
            .notNullable()
            .defaultTo(knex.fn.now());
    })

 exports.down = (knex) => knex.schema.dropTable('DEPARTMENTS');
