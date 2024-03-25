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
                name: 'department name',
                message: 'Enter the name of the department'
            },
        ]);


        const [rows, fields] = await Connection.execute(
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

        .then(({ mainMenuOptions }) => {
            switch (mainMenuOptions) {

                case "View Departments":
                break;

                case "Add New Department":
                break; 

                case "View Job Roles":
                break;

                case "Add New Job Role":
                break; 

                case "View Employees":
                break; 

                case "Add New Employee":
                break;

                case "Exit":
                break;


            }
        })

    

}