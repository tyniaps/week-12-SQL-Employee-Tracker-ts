const inquirer = require ('inquirer'); 
const mySql2 = require ('mysql2/promise');

const connectToDb = {
    host: "localhost",
    user: "root",
    password: "mypass1",
    database: "etracker_db",
};

async function viewDepartments () {
    const connect = await mySql2.createConnection(connectToDb);
    try {
        const [rows, fields] = await connect.execute('SELECT * FROM departments');
        console.table(rows);
    } catch (error) {
        console.error('error with showing departments', error);
    } finally {
        connect.end()
        .then (() => {
            mainMenu();
        })
    
    }
}

async function viewRoles () {
    const connect = await mySql2.createConnection(connectToDb);
    try {
        const[rows, fields] = await connect.execute('SELECT * FROM job_roles');
        console.table(rows);
    } catch (error) {
        console.error('error with viewing roles', error);
    } finally {
        connect.end()
        .then (() => {
            mainMenu();
        })
    

    }
}

async function viewEmployees () {
    const connect = await mySql2.createConnection(connectToDb);
    try {
        const[rows, fields] = await connect.execute('SELECT * FROM employees');
        console.table(rows);
    } catch (error) {
        console.error('error with viewing employees', error);
    } finally {
        connect.end()
        .then (() => {
            mainMenu();
        })
    
    }
}


async function newDepartment() {
    const connect = await mySql2.createConnection(connectToDb);
    try { 
        const departmentInput = await inquirer.prompt([
            {  
                type: 'input',
                name: 'department_name',
                message: 'Enter the name of the department:'
            },
        ]);


        const [rows, fields] = await connect.execute(
            'INSERT INTO departments (department_name) VALUES (?)',
            [departmentInput.department_name]
        );

        console.log(`"${departmentInput.department_name}" successfully added`);
        } catch (error) {
            console.error("Unable to add department, please try again");
        } finally {
            connect.end()
            .then (() => {
                mainMenu();
            })
        
    }    
}

async function newJobRole() {
    const connect = await mySql2.createConnection(connectToDb);
    try { 
        const roleInput = await inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter the title of the role:',
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter the salary of the role:',
            },
            {
                type: 'input',
                name: 'department_id',
                message: 'Enter the ID of the roles department:'
            }
        ]);

        const [rows, fields] = await connect.execute(
            'INSERT INTO job_roles (title, salary, department_id) VALUES (?, ?, ?)',
            [roleInput.title, roleInput.salary, roleInput.department_id]
        );
        
           console.log(`"${roleInput.title}" successfully added`);
        } catch (error) {
           console.error("Unable to add job role, please try again");
        } finally {
            connect.end()
            .then (() => {
                mainMenu();
            })
        
    }    
}

    

async function newEmployee() {
        const connect = await mySql2.createConnection(connectToDb);
    try { 
        const employeeInput = await inquirer.prompt([
            {
                type: 'input',
                name: 'first_name',
                message: 'Enter the first name of the employee ',
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'Enter the last name of the employee',
            },
            {
                type: 'input',
                name: 'role_id',
                message: 'Enter the ID for the employee job role title'
            },
            {
                type: 'input',
                name: 'manager_id',
                message: 'Enter the ID for the employee manager (if n/a, please leave this blank)',
            }
        ]);

        const [rows, fields] = await connect.execute(
            'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
            [employeeInput.first_name, employeeInput.last_name, employeeInput.role_id, employeeInput.manager_id]
        );
        
           console.log(`"${employeeInput.first_name} ${employeeInput.last_name}" successfully added`);
        } catch (error) {
           console.error("Unable to add employee, please try again");
        } finally {
            connect.end()
            .then (() => {
                mainMenu();
            })
        
    }    
}

console.log("Welcome to the SQL Employee Tracker");
console.log("What would you like to do?");

async function mainMenu() {
    const menuOptions = await inquirer.prompt({

        type: "list",
        name: "input",
        message: "Please choose from the options below:",
        choices: [
            "View Departments",
            "Add New Department",
            "View Job Roles",
            "Add New Job Role",
            "View Employees",
            "Add New Employee",
            "Exit",
        ], 
    });

        
            switch (menuOptions.input) {

                case "View Departments":
                      viewDepartments();
                break;

                case "Add New Department":
                    newDepartment();
                break; 

                case "View Job Roles":
                    viewRoles();
                break;

                case "Add New Job Role":
                    newJobRole();
                break; 

                case "View Employees":
                    viewEmployees();
                break; 

                case "Add New Employee":
                    newEmployee();
                break;

                case "Exit":
                    exitApplication();
        


            } 
}


function exitApplication() {
    console.clear();
    console.log("SQL Employee Tracker is shutting down. Enter 'Ctrl + C' to finish.");
}


mainMenu();