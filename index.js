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

const addDepartmentMenu = [{
    name: "addDepartment",
    message: "Enter the name of the new department"
}]

const addRoleMenu = [{
    name: "roleName",
    message: "Enter the name of the new role"
}, {
    name: "roleSalary",
    message: "Enter the salary for the new role, in decimal format"
}, {
    name: "roleDepartment",
    message: "Enter the numerical ID for the department the new role is in"
}]

const addEmployeeMenu = [{
    name: "employeeFirstName",
    message: "Enter the first name of the new employee"
}, {
    name: "employeeLastName",
    message: "Enter the last name of the new employee"
}, {
    name: "employeeRole",
    message: "Enter the numerical ID for the role the new employee is in"
}, {
    name: "employeeManager",
    message: "Please enter the numerical ID for the manager of the new employee"
}]

// a function to initialize app
function viewMenu() {
    inquirer.prompt(menu).then((answers) => {
        if(answers.menuChoice === "View all departments") {
            viewAllDepartments();
        } else if(answers.menuChoice === "View all roles") {
            viewAllRoles();
        } else if(answers.menuChoice === "View all employees") {
            viewAllEmployees();
        } else if(answers.menuChoice === "Add a department") {
            newDepartment();
        } else if(answers.menuChoice === "Add a role") {
            newRole();
        } else if(answers.menuChoice === "Add an employee") {
            newEmployee();
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

function newDepartment() {
    inquirer.prompt(addDepartmentMenu).then((answers) => {
        addDepartment(answers);
    })
}

async function addDepartment(answers) {
    const query = `INSERT INTO department (name) VALUES ("${answers.addDepartment}");`;
    const [rows] =  await connection.query(query)
    console.log(rows);
}

function newRole() {
    inquirer.prompt(addRoleMenu).then((answers) => {
        addRole(answers);
    })
}

//should it be add to instead of insert into?
async function addRole(answers) {
    const query = `INSERT INTO role (title, salary, department_id) VALUES ("${answers.roleName}", ${answers.roleSalary}, ${answers.roleDepartment});`;
    const [rows] =  await connection.query(query)
    console.log(rows);
}

function newEmployee() {
    inquirer.prompt(addEmployeeMenu).then((answers) => {
        addEmployee(answers);
    })
}

async function addEmployee(answers) {
    const query = `INSERT INTO role (first_name, last_name, role_id, manager_id) VALUES ("${answers.employeeFirstName}", ${answers.employeeLastName}, ${answers.employeeRole},  ${answers.employeeManager});`;
    const [rows] =  await connection.query(query)
    console.log(rows);
}

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database
function updateEmployeeRole() {

}

// calling the function to initialize the app
viewMenu();