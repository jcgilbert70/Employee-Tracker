INSERT INTO department(dept_name)
VALUES
("Sales"),
("Engineering"),
("Finance"),
("Legal");



INSERT INTO job(title, salary, department_id)
VALUES
("Sales Lead", 100000, 1),
("Salesperson", 80000, 1),
("Lead Engineer", 150000, 2),
("Software Engineer", 120000, 2),
("Account Manager", 160000, 1),
("Accountant", 125000, 3),
("Legal Team Lead", 250000, 4),
("Lawyer", 190000, 4);


INSERT INTO employee(first_name, last_name, job_id, manager_id)
VALUES
("John", "Doe", 1, 1),
("Mike", "Chan", 2, 1),
("Ashley", "Rodriguez", 3, 1),
("Kevin", "Tupik", 4, 1),
("Kumal", "Singh", 5, 1),
("Malia", "Brown", 6, 1),
("Sarah", "Lourd", 7,1 ),
("Tom", "Allen", 8,1 );