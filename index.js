const inquirer = require ('inquirer'); 
const mySql2 = require ('mysql2/promise');

const connect2Database = {
    host: "localhost",
    user: "root",
    password: "mypass1",
    database: "etracker",
};

function viewDepartments () {
    
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