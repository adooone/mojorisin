const Knex = require('knex');

// function testKnex() {
//     console.log(proce


const config = process.env.PRODUCTION ? {
    // Server
    host: '35.198.148.214',
    socketPath: `/cloudsql/${ process.env.INSTANCE_CONNECTION_NAME }`,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
} : {
    // Local
    host: '127.0.0.1',
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
};
// config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
// Connect to the database
const knex = Knex({
    client: 'mysql',
    version: '5.7',
    connection: config,
});
// https://cloud.google.com/appengine/docs/standard/nodejs/using-cloud-sql
// cloud_sql_proxy -instances=risinproduction:europe-west4:risinproduction-db=tcp:3306
// neptunewa:europe-west3:neptune-db
// https://phpmyadmin-dot-neptunewa.appspot.com/
module.exports = knex;
