DROP DATABASE IF EXISTS etracker_db;
CREATE DATABASE etracker_db;

USE etracker_db;

DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS job_role;
DROP TABLE IF EXISTS employee;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT,
    department_name VARCHAR (30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE job_role (
    id INTEGER AUTO_INCREMENT,
    title VARCHAR (30) NOT NULL, 
    salary DECIMAL (10, 2)
    department_id INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id),
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    role_id INTEGER,
    department_id INTEGER,
    manager_id INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role(id),
    ON DELETE SET NULL
);