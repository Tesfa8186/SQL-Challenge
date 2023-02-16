const inquirer = require("inquirer");
const mysql = require("mysql2");
require("console.table");

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL Username
        user: 'root',
        // TODO: Add MySQL Password
        password: 'Nollamara@6061',
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);

const mainMenu = () => {
    inquirer.prompt({
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Update an Employee Role",
            "Exit"
        ]
    })
        .then((answer) => {
            if (answer.action === "View All Departments") {
                viewAllDepartments()
            }
            if (answer.action === "View All Roles") {
                viewAllRoles()
            }
            if (answer.action === "View All Employees") {
                viewAllEmployees()
            }
            if (answer.action === "Add a Department") {
                addDepartment()
            }
            if (answer.action === "Add a Role") {
                addRole()
            }
            if (answer.action === "Add an Employee") {
                addEmployee()
            }
            if (answer.action === "Update an Employee Role") {
                addEmployeeRole()
            }
            if (answer.action === "Exit") {
                console.log("Goodbye!")
                process.exit(1)
            }
        })
}

// VIEW FUNCTION / SELECT QUERIES
const viewAllDepartments = () => {
    db.query("SELECT * FROM department;", function (err, result) {
        console.table(result);
        mainMenu();
    })
}

const viewAllRoles = () => {
    db.query("SELECT * FROM role;", function (err, result) {
        console.table(result);
        mainMenu();
    })
}

const viewAllEmployees = () => {
    db.query("SELECT * FROM employee;", function (err, result) {
        console.table(result);
        mainMenu();
    })
}


// ADD FUNCTIONS / INSERT QUERIES
const addDepartment = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "dept_name",
            message: "What is the name of the new department?"
        }
    ])
    .then(answers => {
        db.query(
            `INSERT INTO department (name) VALUES ("${answers.dept_name}")`,
            function(err, result) {
                if(err) console.log(err)
                mainMenu()
            }
        )
    })
}

const addRole = () => {
    db.query("SELECT * from department;", function(err, results) {
        inquirer.prompt([
            {
                type: "input",
                name: "title",
                message: "What is the title of the new role?"
            },
            {
                type: "input",
                name: "salary",
                message: "What is the salary of the new role?"
            },
            {
                type: "list",
                name: "dept_id",
                message: "Which department does this role belong to?",
                choices: results.map(dept => {
                    return {
                        name: dept.name,
                        value: dept.id
                    }
                })
            }
        ])
        .then(answers => {
            db.query(
                `INSERT INTO role (title, salary, department_id) VALUES ("${answers.title}", "${answers.salary}", "${answers.dept_id}")`,
                function(err, result) {
                    if(err) console.log(err)
                    mainMenu()
                }
            )
        })
    })
}
// ADD EMPLOYEE
const addEmployee = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "first_name",
                message: "What is the first name of the new employee?"
            },
            {
                type: "input",
                name: "last_name",
                message: "What is the last name of the new employee?"
            },
            {
                type: "input",
                name: "role_id",
                message: "What is the role id of the new employee?"
            },
            {
                type: "list",
                name: "manager_id",
                message: "What is the manager id of the new employee?",
               
            }])
        
        .then(answers => {
            db.query(
                `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${answers.first_name}", "${answers.last_name}", "${answers.role_id}", "${answers.manager_id}" )`,
                function(err, result) {
                    if(err) console.log(err)
                    mainMenu()
                }
            )
        })
    }


mainMenu();