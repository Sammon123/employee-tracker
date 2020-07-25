CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE _department (
    id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    PRIMARY KEY(id)
);

CREATE TABLE _role (
    id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    title VARCHAR(30) NULL,
    salary DECIMAL(10, 4),
    department_id - INT NULL,
    PRIMARY KEY(id)

);

CREATE TABLE _employee (
    id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY(id)

);
SELECT * FROM _department;
SELECT * FROM _role;
SELECT * FROM _employee;