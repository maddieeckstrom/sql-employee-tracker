// connecting our node application to our mysql server and specifying the database we want to use
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_tracker'
}).promise();

module.exports = connection;