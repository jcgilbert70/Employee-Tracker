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

                    "Edit employee",

                    "Add new employee",
                    "Add new role",
                    "Add new department",

                    "Terminate employee",
                    "Delete role type",
                    "Delete department type",
                    "Exit",
                ],
            },
        ])

        // choice selection run corresponding function
        .then((answer) => {
            if (answer.mainMenue === "View all employees") {
                viewAllEmployees();

            } else if (answer.mainMenue === "View all roles") {
                viewAllRoles();

            } else if (answer.mainMenue === "View all departments") {
                viewAllDepartments();

            } else if (answer.mainMenue === "View employees by department") {
                viewEmployeesByDepartment();

            } else if (answer.mainMenue === "Edit employee") {
                editEmployee();

            } else if (answer.mainMenue === "Add new employeet") {
                addEmployee();

            } else if (answer.mainMenue === "Add new role") {
                addRole();

            } else if (answer.mainMenue === "Add new department") {
                addDepartment();

            } else if (answer.mainMenue === "Terminate employee") {
                terminateEmployee();

            } else if (answer.mainMenue === "Delete role type") {
                deleteRole();

            } else if (answer.mainMenue === "Delete department type") {
                deleteDepartment();

            } else {
                connection.end();
            }
        });


    // function to view employee
function viewAllEmployees() {

}
    // function to view job type
function viewAllRoles() {

}
    // function to view departments
function viewAllDepartments() {

}
    // function to view employees by department
function viewEmployeesByDepartment() {

}

    // function to edit an emplyee role
function editEmployee() {

}

    // function to add employee
function addEmployee() {

}
    // function to add job type
function addRole() {

}
    // function to add dept
function addDepartment() {

}


    // function to delete employee
function terminateEmployee() {

}
    // function to delete job type
function deleteRole() {
    
}
    // function to delete dept
function deleteDepartment() {
    
}

}