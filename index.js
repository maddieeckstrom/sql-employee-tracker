const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const questions = [{
    type: "list",
    name: "View",
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