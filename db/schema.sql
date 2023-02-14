-- Drop employee_db if it exists currently --
DROP DATABASE IF EXISTS employees_db;

-- Create the employee_db database --
CREATE DATABASE employees_db;

-- Use employee_db database --
USE employees_db;

-- Create tables for " Employee, Role & Department" with numericd column "id"; 
-- Also a stiring column "name" which can't contain NULL.
CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30)
);

CREATE TABLE role (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL(10.5),
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);