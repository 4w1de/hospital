require('dotenv').config();

module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            host: process.env.PG_HOST,
            user: process.env.PG_USERNAME,
            password: process.env.PG_PASSWORD,
            database: process.env.PG_DATABASE,
            port: process.env.PG_PORT,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: './db/migrations',
        },
        seeds: {
            directory: './db/seeds',
        },
    },
};
