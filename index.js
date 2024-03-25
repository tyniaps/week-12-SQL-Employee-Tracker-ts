const inquirer = require ('inquirer'); 
const mySql2 = require ('mysql2/promise');

const connectToDb = {
    host: "localhost",
    user: "root",
    password: "mypass1",
    database: "etracker",
};

async function viewDepartments () {
    const connect = await mySql2.createConnection(connectToDb);
    try {
        const [rows, fields] = await connect.execute('SELECT * FROM department');
        console.table(rows);
    } catch (error) {
        console.error('error with showing departments', error);
    } finally {
        connect.end();
    }
}

async function viewRoles () {
    const connect = await mySql2.createConnection(connectToDb);
    try {
        const[rows, fields] = await connect.execute('SELECT * FROM employee_role');
        console.table(rows);
    } catch (error) {
        console.error('error with viewing roles', error);
    } finally {
        connect.end();

    }
}

async function viewEmployees () {
    const connect = await mySql2.createConnection(connectToDb);
    try {
        const[rows, fields] = await connect.execute('SELECT * FROM employee');
        console.table(rows);
    } catch (error) {
        console.error('error with viewing employees', error);
    } finally {
        connect.end();
    
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
            'INSERT INTO department (department_name) VALUES (?)',
            [departmentInput.name]
        );

        console.log(`"${departmentInput.name}" successfully added`);
        } catch (error) {
            console.error("Unable to add department, please try again");
        } finally {
            connect.end();
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
            'INSERT INTO job_role (title, salary, department_id) VALUES (?, ?, ?)',
            [roleInput.title, roleInput.salary, roleInput.department_id]
        );
        
           console.log(`"${roleInput.title}" successfully added`);
        } catch (error) {
           console.error("Unable to add job role, please try again");
        } finally {
            connect.end();
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
            'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
            [employeeInput.first_name, employeeInput.last_name, employeeInput.role_id, employeeInput.manager_id]
        );
        
           console.log(`"${employeeInput.first_name} ${employeeInput.last_name}" successfully added`);
        } catch (error) {
           console.error("Unable to add employee, please try again");
        } finally {
            connect.end();
    }    
}



function mainMenu() {

    console.log("Welcome to the SQL Employee Tracker");
    console.log("What would you like to do?");

        inquirer.prompt(
    [{
        type: "list",
        name: "menuOptions",
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
    }]
    )

        .then(({ menuOptions }) => {
            switch (menuOptions) {

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

                default:
                break;


            }
        })

}

mainMenu();