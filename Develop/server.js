// NPM Dependencies
const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');
require('dotenv').config();

// Use mysql to connect to your mysql database and perform queries.
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'F15h3567!',
    database: 'employees_db'
});

connection.connect((err) => {
    if (err)
        throw err;
})

// Use inquirer to interact with the user via the command-line.

// Use console.table to print mysql rows to the console