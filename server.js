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

connection.connect(function (error) {
    //callback
    if (!error) {
        console.log("error");
    } else {
        console.log("connected");
    }

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
                    "Terminate employee",
                    "Delete role type",
                    "Delete department type",
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

            } else if (answer.mainMenueList === "View employees by department") {
                viewEmployeesByDepartment();

            } else if (answer.mainMenueList === "Edit employee") {
                editEmployee();

            } else if (answer.mainMenueList === "Add new employeet") {
                addEmployee();

            } else if (answer.mainMenueList === "Add new role") {
                addRole();

            } else if (answer.mainMenueList === "Add new department") {
                addDepartment();

            } else if (answer.mainMenueList === "Terminate employee") {
                terminateEmployee();

            } else if (answer.mainMenueList === "Delete role type") {
                deleteRole();

            } else if (answer.mainMenueList === "Delete department type") {
                deleteDepartment();

            } else {
                connection.end();
            }
        });
}

// function to view employee
function viewAllEmployees() {
    connection.query(
        'SELECT employee.id, first_name, last_name, title, salary, dept_name, manager_id FROM ((department JOIN job ON department.id = job.department_id) JOIN employee ON job.id = employee.job_id);',
        function (err, res) {
            if (err) throw err;
            console.table(res);
            mainMenue();
        }
    );
};

// function to view job type
function viewAllRoles() {
    connection.query('SELECT * FROM job', function (err, res) {
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
                name: "roleId",
                message: "Enter new role ID number"
            }
        ])
        .then(answer => {
            connection.query(
                "UPDATE employee SET ? WHERE ?",
                [answer.jobId, answer.id],
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

