const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: '172.28.128.1', 
    user: 'wsluser',
    password: '0605',  
    database: 'clinica_db', 
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = db;
