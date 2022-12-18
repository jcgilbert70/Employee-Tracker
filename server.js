const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const table = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3001,
    user: "root",
    password: "",
    database: "business_db",
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
}

// function to view employee
function viewAllEmployees() {
    connection.query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;",
        function (err, res) {
            if (err) throw err;
            console.table(res);
            mainMenue();
        }
    );
}

// function to view job type
function viewAllRoles() {
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        console.table(res);
        questions();
    });
}

// function to view departments
function viewAllDepartments() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        mainMenue();
    });
}


// function to view employees by department
function viewEmployeesByDepartment() {

}

// function to edit an emplyee role
function editEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "employeeId",
            message: "Enter ID of employee being edited"
        },
        {
            type: "input",
            name: "roleId",
            message: "Enter new role ID number"
        }
    ]).then(answers => {

        connection.query('UPDATE employee SET ? WHERE ?', [
            {
                role_id: answers.roleId
            },
            {
                id: answers.employeeId
            }
        ])
        mainMenue();
    });
}

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
        .then((answers) => {
            connection.query("INSERT INTO employee SET ?", {
                first_name: answers.firstName,
                last_name: answers.lastName,
                role_id: answers.roleId,
                manager_id: answers.managerId,
            });
            mainMenue();
        });
}

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
        .then((answers) => {
            connection.query("INSERT INTO role SET ?", {
                title: answers.roleName,
                salary: answers.salary,
                department_id: answers.departmentId,
            });
            mainMenue();
        })
}


// function to add dept
function addDepartment() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "dept",
                message: "Enter the name of the new department",
            },
        ])
        .then((answer) => {
            connection.query("INSERT INTO department SET ?", {
                name: answer.dept,
            });
            mainMenue();
        });
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

