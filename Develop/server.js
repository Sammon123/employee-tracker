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
    start();
})

function start() {
    // Use inquirer to interact with the user via the command-line.
    inquirer
        .prompt({
            name: 'postOrBid',
            type: 'list',
            message: 'Would you like to [POST] an auction or [BID] on an auction?',
            choices: ['POST', 'BID', 'EXIT'],
        })
        .then(function (answer) {
            // based on their answer, either call the bid or the post functions
            if (answer.postOrBid === 'POST') {
                postAuction();
            } else if (answer.postOrBid === 'BID') {
                bidAuction();
            } else {
                connection.end();
            }
        });
    // prompt the user for what they want to do
    // -- then when you get the responses
    // -- query the database
    // -- when the response comes back
    // -- display it console.table(response); 

}

// Use console.table to print mysql rows to the console