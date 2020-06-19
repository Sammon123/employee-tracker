// NPM Dependencies
const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');
require('dotenv').config();

// Use mysql to connect to your mysql database and perform queries.
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});



connection.connect((err) => {
    if (err)
        throw err;
})

// Use inquirer to interact with the user via the command-line.

// Use console.table to print mysql rows to the console