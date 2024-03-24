const inquirer = require ('inquirer'); 
const mySql2 = require ('mysql2/promise');

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
        
        default: "View Departments",
    }]
    )

    

}