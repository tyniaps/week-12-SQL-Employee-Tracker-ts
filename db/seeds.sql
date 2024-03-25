INSERT INTO departments (department_name) VALUES
 
 ('Graphical Communications'),
 ('Industrial Design'),
 ('Engineering'),
 ('Finance'),
 ('Human Resources');


 INSERT INTO job_roles (title, salary, department_id) VALUES

 ('Junior Graphic Designer', '26000.00', 1),
 ('Senior Graphic Designer', '54000.00', 1),
 ('Junior Engineer', '33000.00', 3),
 ('Senior Engineer', '64000.00', 3),
 ('Financial Consultant', '40000.00', 4),
 ('Senior Financial Consultant', '60000.00', 4),
 ('HR Assistant', '32000.00', 5),
 ('Senior HR Assistant', '35000.00', 5);

 

 INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
 
 ('Jaya', 'Ayna', 1, 1),
 ('Lina', 'Moon', 2, NULL),
 ('Misty', 'Ellis', 3, 2),
 ('Otis', 'Jones', 4, NULL),
 ('Tobi', 'Ade', 5, 3),
 ('Teddy', 'Farmer', 6, NULL),
 ('Joyce', 'Carter', 7, 4),
 ('Crishelle', 'Cox', 8, NULL);

