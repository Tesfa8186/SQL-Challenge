
USE employees_db;

INSERT INTO department (name)
VALUES  ("Engineering"), ("Finance"), ("Legal"),("Sales") ;

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 140000, 1), ("Software Engineer", 130000, 1), ("Accountant", 12000, 2), ("Legal Team Lead", 240000, 3), ("Sales Lead", 110000, 4);
 
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "DOE", 1, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "CHAN", 2, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ashley", "RODRIGUEZ", 3, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kevin", "TUPIK", 4, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kunal", "SINGH", 5, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Malia", "BROWN", 5, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sarah", "LOURD", 2, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "ALLEN", 4, 7);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sam", "KASH", 1, 2);

