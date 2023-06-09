// external imports
const inquirer = require('inquirer');
const fs = require('fs');

// internal imports
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateTeam = require('./util/generateHtml');

const teamArr = [];

// main function generating team profiles
const createTeam = async () => {
    const ans = await inquirer.prompt({
        type: 'list',
        name: 'moreMembers',
        message: 'Do you want to enter add a member profile to your team?',
        choices: ['yes', 'no']
    })
        if(ans.moreMembers === 'yes'){
            const roleAns = await inquirer.prompt({
                type: 'list', 
                name: 'roleType',
                message: "What role will this member fill?",
                choices: ['manager', 'engineer', 'intern']
            })
            switch (roleAns.roleType) {
                case 'manager':
                    await generateManager();
                    break;
                case 'engineer':
                    await generateEngineer();
                    break;
                case 'intern':
                    await generateIntern();
                    break;        
            }
            await createTeam();
        } else {
            console.log("congrats on your new team profile html!");
            fs.writeFile('./dist/index.html', generateTeam(teamArr), (err) => {
                if (err) throw err;
            });
        }
}

// function for generating a new manager
const generateManager = async () => {
    const data = await inquirer.prompt([
        {
            type: 'input',
            name: 'manager.name',
            message: "What is the name of the manager you want to add?"
        },
        {
            type: 'input',
            name: 'manager.id',
            message: "What is the managers id?"
        },
        {
            type: 'input',
            name: 'manager.email',
            message: "What is the manager's email address?"
        },
        {
            type: 'input',
            name: 'manager.officeNum',
            message: "What is the office number for the manager?"
        }
    ])
        teamArr.push(new Manager(data.manager.name, data.manager.id, data.manager.email, data.manager.officeNum))
}

// function for generating a new engineer
const generateEngineer = async () => {
   const data = await inquirer.prompt([
        {
            type: 'input',
            name: 'engineer.name',
            message: "What is the name of the engineer you are adding?"
        },
        {
            type: 'input',
            name: 'engineer.id',
            message: "What is the engineers id?"
        },
        {
            type: 'input',
            name: 'engineer.email',
            message: "What is the engineer's email address?"
        }, 
        {
            type: 'input',
            name: 'engineer.github',
            message: "What is the enginers GitHub username?"
        }
    ])
    teamArr.push(new Engineer(data.engineer.name, data.engineer.id, data.engineer.email, data.engineer.github))
}

// function for generating a new intern
const generateIntern = async () => {
     const data = await inquirer.prompt([
        {
            type: 'input',
            name: 'intern.name',
            message: "What is the name of the intern you are adding?"
        },
        {
            type: 'input',
            name: 'intern.id',
            message: "What is the intern's id?"
        },
        {
            type: 'input',
            name: 'intern.email',
            message: "What is the intern's email address?"
        },
        {
            type: 'input',
            name: 'intern.school',
            message: "What is the name of the school the intern attends?"
        }
    ])
    teamArr.push(new Intern(data.intern.name, data.intern.id, data.intern.email, data.intern.school))
}

// calling the main function to start the app
createTeam();