-- make sure no database duplicates
DROP DATABSE IF EXISTS business_db;

CREATE DATABASE business_db; 
USE business;


-- DROP TABLE seeds if they exist
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employee;

-- CREATE TABLES seeds, need "primary key" id integer=INT, for values use VARCHAR30, INT, BOOLEAN, with NOT NULL values

-- department id & name
CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);


-- roles title, id, title, salary, dept #
CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT,

    FOREIGN KEY (department_id) REFERENCES department(id)
);

-- employee id, name, last name, role
CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    FOREIGN KEY(role_id) REFERENCES role(id),
    manager_id INT,

    FOREIGN KEY(manager_id) REFERENCES employee(id)
);

