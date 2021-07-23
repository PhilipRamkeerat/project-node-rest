const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '#Oo9876543',
    database: 'schedule-petshop'
})

module.exports = connection;