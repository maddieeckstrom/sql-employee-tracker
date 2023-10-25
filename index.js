const inquirer = require('inquirer');
const connection = require('./config/connection');

const menu = [{
    type: "list",
    name: "menuChoice",
    message: "What would you like to do?",
    choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role"
    ]
}]

// a function to initialize app
function viewMenu() {
    inquirer.prompt(menu).then((answers) => {
       // make if statements for each table
        if(answers.menuChoice === "View all departments") {
            viewAllDepartments();
        } else if(answers.menuChoice === "View all roles") {
            viewAllRoles();
        } else if(answers.menuChoice === "View all employees") {
            viewAllEmployees();
        } else if(answers.menuChoice === "Add a department") {
            addDepartment();
        } else if(answers.menuChoice === "Add a role") {
            addRole();
        } else if(answers.menuChoice === "Add an employee") {
            addEmployee();
        } else if(answers.menuChoice === "Update an employee role") {
            updateEmployeeRole();
        }
    })
}

async function viewAllDepartments() {
    const query = "SELECT * FROM department;";
    const [rows] =  await connection.query(query)
    console.log(rows);
}

async function viewAllRoles() {
    const query = "SELECT * FROM role;";
    const [rows] =  await connection.query(query)
    console.log(rows);
}

async function viewAllEmployees() {
    const query = "SELECT * FROM employee;";
    const [rows] =  await connection.query(query)
    console.log(rows);
}

function addDepartment() {

}

function addRole() {

}

function addEmployee() {

}

function updateEmployeeRole() {

}

// calling the function to initialize the app
viewMenu();