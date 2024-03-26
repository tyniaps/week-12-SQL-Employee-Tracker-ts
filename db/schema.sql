DROP DATABASE IF EXISTS etracker_db;
CREATE DATABASE etracker_db;

USE etracker_db;


CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT,
    department_name VARCHAR (30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE job_roles (
    id INTEGER AUTO_INCREMENT,
    title VARCHAR (30) NOT NULL, 
    salary DECIMAL (10, 2),
    department_id INTEGER,
    PRIMARY KEY (id)
);

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    role_id INTEGER,
    department_id INTEGER,
    manager_id INTEGER,
    PRIMARY KEY (id)
);