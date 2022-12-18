USE business_db;

-- INSERT INTO dept(x, y)
INSERT INTO department(id, name)
--VALUES (1,2,3...)
VALUES
(1, "Sales"),
(2, "Engineering"),
(3, "Finance"),
(4, "Legal")
;


-- INSERT INTO roles
INSERT INTO roles(id, title, salary, department_id)
--VALUES (1,2,3...)
VALUES
(1, "Sales Lead", 100000, 1),
(2, "Salesperson", 80000, 1),
(3, "Lead Engineer", 150000, 2),
(4, "Software Engineer", 120000, 2),
(5, "Account Manager", 160000, 1),
(6, "Accountant", 125000, 3),
(7, "Legal Team Lead", 250000, 4),
(8, "Lawyer", 190000, 4)
;

-- INSERT INTO empoyee-name
INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
--VALUES (1,2,3...)
(1, "John", "Doe", 1, 1),
(2, "Mike", "Chan", 2, 1),
(3, "Ashley", "Rodriguez", 3, 1),
(4, "Kevin", "Tupik", 4, 1),
(5, "Kumal", "Singh", 5, 1),
(6, "Malia", "Brown", 6, 1),
(7, "Sarah", "Lourd", 7,1 ),
(8, "Tom", "Allen", 8,1 )
;