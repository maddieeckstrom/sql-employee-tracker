const inquirer = require('inquirer');
const connection = require('./config/connection');
const cTable = require('console.table');

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
    console.table(rows);
}

async function viewAllRoles() {
    const query = "SELECT * FROM role;";
    const [rows] =  await connection.query(query)
    console.table(rows);
}

async function viewAllEmployees() {
    const query = "SELECT * FROM employee;";
    const [rows] =  await connection.query(query)
    console.table(rows);
}

function newDepartment() {
    inquirer.prompt(addDepartmentMenu).then((answers) => {
        addDepartment(answers);
    })
}

async function addDepartment(answers) {
    const query = `INSERT INTO department (name) VALUES ("${answers.addDepartment}");`;
    const [rows] =  await connection.query(query)
    await viewAllDepartments();
    viewMenu();
}

function newRole() {
    inquirer.prompt(addRoleMenu).then((answers) => {
        addRole(answers);
    })
}

async function addRole(answers) {
    const query = `INSERT INTO role (title, salary, department_id) VALUES ("${answers.roleName}", ${answers.roleSalary}, ${answers.roleDepartment});`;
    const [rows] =  await connection.query(query)
    await viewAllRoles();
    viewMenu();
}

async function newEmployee() {
    const query = "SELECT * FROM role;";
    const [rows] =  await connection.query(query);
    const employeeQuery = "SELECT * FROM employee;";
    const [employeeRows] =  await connection.query(employeeQuery);

    inquirer.prompt([{
        name: "employeeFirstName",
        message: "Enter the first name of the new employee"
    }, {
        name: "employeeLastName",
        message: "Enter the last name of the new employee"
    }, {
        type: "list",
        name: "employeeRole",
        message: "Enter the role the new employee is in",
        choices: rows.map(role => {
            return {
                name: role.title,
                value: role.id
            }
        })
    }, {
        type: "list",
        name: "employeeManager",
        message: "Please enter the manager of the new employee",
        choices: employeeRows.map(employee => {
            return {
                name: employee.first_name + " " + employee.last_name,
                value: employee.id
            }
        })
    }]).then((answers) => {
        addEmployee(answers);
    })
}

async function addEmployee(answers) {
    const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${answers.employeeFirstName}", "${answers.employeeLastName}", ${answers.employeeRole},  ${answers.employeeManager});`;
    const [rows] =  await connection.query(query)
    console.log(rows);
    await viewAllEmployees();
    viewMenu();
}

async function updateEmployeeRole() {
    const employeeQuery = "SELECT * FROM employee;";
    const [employeeRows] =  await connection.query(employeeQuery);
    const roleQuery = "SELECT * FROM role;";
    const [roleRows] = await connection.query(roleQuery);

    inquirer.prompt([{
        type: "list",
        name: "employeeUpdate",
        message: "Which employee would you like to update?",
        choices: employeeRows.map(employee => {
            return {
                name: employee.first_name + " " + employee.last_name,
                value: employee.id
            }
        })
    }, {
        type: "list",
        name: "employeeNewRole",
        message: "What is the name of the new role for this employee?",
        choices: roleRows.map(role => {
            return {
                name: role.title,
                value: role.id
            }
        })
    }]).then((answers) => {
        updateNewRole(answers);
    })
}

async function updateNewRole(answers) {
    const query = `UPDATE employee SET role_id = ${answers.employeeNewRole} WHERE id = ${answers.employeeUpdate}`;
    const [rows] =  await connection.query(query)
    console.log(rows);
    await viewAllEmployees();
    viewMenu();
}

// calling the function to initialize the app
viewMenu();