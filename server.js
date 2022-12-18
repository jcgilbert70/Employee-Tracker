const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const table = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3001,
    user: "root",
    password: "",
    database: "",
});

connection.connect(function (err) {
    if (err) throw err;
    mainMenue();
});


// list of all main page options
function mainMenue() {

    inquirer
        .prompt([
            {
                type: "list",
                name: "mainMenue",
                message: "Select what action you would like to process",
                choices: [
                    "View all employees",
                    "View all roles",
                    "View all departments",
                    "View all employees by department",

                    "Edit employee role",

                    "Add new department",
                    "Add new role",
                    "Add new employee",

                    "Terminate employee",
                    "Delete role type",
                    "Delete department type",
                    "Exit",
                ],
            },
        ])

// choice selection run corresponding function



    // function to view employee

    // function to view job type

    // function to view departments

    // function to view employees by department


    // function to edit an emplyee role


    // function to add employee

    // function to add job type

    // function to add dept



    // function to delete employee

    // function to delete job type

    // function to delete dept



    // function to exit

}