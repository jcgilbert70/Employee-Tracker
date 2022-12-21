const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const table = require("console.table");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'Erika@0824',
    database: 'business_db',
});

connection.connect(function (err) {
    //callback
    if (err) {
    //throw err;
    console.log("failed: " + err);
    }
    
    
        console.log("connected");
        mainMenue();
    

});

// list of all main page options
function mainMenue() {

    inquirer
        .prompt([
            {
                type: "list",
                name: "mainMenueList",
                message: "Select what action you would like to perform",
                choices: [
                    "View all employees",
                    "View all roles",
                    "View all departments",
                    "Edit employee",
                    "Add new employee",
                    "Add new role",
                    "Add new department",
                    "Exit",
                ],
            },
        ])

        // choice selection run corresponding function
        .then((answer) => {
            if (answer.mainMenueList === "View all employees") {
                viewAllEmployees();

            } else if (answer.mainMenueList === "View all roles") {
                viewAllRoles();

            } else if (answer.mainMenueList === "View all departments") {
                viewAllDepartments();

            } else if (answer.mainMenueList === "Edit employee") {
                editEmployee();

            } else if (answer.mainMenueList === "Add new employeet") {
                addEmployee();

            } else if (answer.mainMenueList === "Add new role") {
                addRole();

            } else if (answer.mainMenueList === "Add new department") {
                addDepartment();
            } else {
                console.log("LeftProgram");
                connection.end();
            }
        });
}

// function to view employee
function viewAllEmployees() {
    connection.query(
        "SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.deptName AS department, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN roles on employee.roles_id = roles.id LEFT JOIN department on roles.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;",
        function (err, res) {
            if (err) throw err;
            console.table(res);
            mainMenue();
        }
    );
}

// function to view job type
function viewAllRoles() {
    connection.query("SELECT * FROM roles", function (err, res) {
        if (err) throw err;
        console.table(res);
        mainMenue();
    });
};

// function to view departments
function viewAllDepartments() {
    connection.query('SELECT * FROM department', function (err, res) {
        if (err) throw err;
        console.table(res);
        mainMenue();
    });
};

// function to edit an emplyee role
function editEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "employeeId",
                message: "Enter ID of employee being edited"
            },
            {
                type: "input",
                name: "newRoleId",
                message: "Enter new role ID number"
            }
        ])
        .then(answer => {
            connection.query(
                "UPDATE employee SET roles_id=? WHERE id=?",
                [answer.newRoleId, answer.employeeId],
                function (err, res) {
                    if (err) throw err;
                    console.log("Finished Employee Edit");
                    mainMenue();
                }
            );
        });
};

// function to add employee
function addEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "firstName",
                message: "Enter the new employees first name",
            },
            {
                type: "input",
                name: "lastName",
                message: "Enter the new employees last name",
            },
            {
                type: "input",
                name: "roleId",
                message: "Enter the new employees role ID number",
            },
            {
                type: "input",
                name: "managerId",
                message: "Enter the employees manager ID number?",
            },
        ])
        .then((answer) => {
            connection.query(
                "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
                [answer.nameFirst, answer.nameLast, answer.roleId, answer.managerId],
                function (err, res) {
                    if (err) throw err;
                    console.log("New Employee Added");
                    mainMenue();
                }
            );
        });
};


// function to add job type
function addRole() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "roleName",
                message: "Enter the name of the new role"
            },
            {
                type: "input",
                name: "departmentId",
                message: "Enter the department ID"
            },
            {
                type: "input",
                name: "salary",
                message: "Enter the salary amount"
            }
        ])
        .then(answer => {
            connection.query(
                'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)',
                [answer.roleName, answer.salary, answer.departmentId],
                function (err, res) {
                    if (err) throw err;
                    console.log("New Role Added");
                    mainMenue();
                }
            );
        });
};

// function to add dept
function addDepartment() {
    inquirer.prompt([
        {
            name: 'department',
            type: 'input',
            message: 'What is the department name?',
        },
    ])
        .then(answer => {
            connection.query(
                'INSERT INTO department (dept_name) VALUES (?)',
                [answer.department],
                function (err, res) {
                    if (err) throw err;
                    console.log("New Department Added");
                    mainMenue();
                }
            );
        });
};
