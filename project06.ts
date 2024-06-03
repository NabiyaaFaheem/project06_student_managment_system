import inquirer from "inquirer";
interface Student {
    name: string;
    id: number;
}

const students: Student[] = [];

function addStudent() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter student name:',
            },
            {
                type: 'number',
                name: 'id',
                message: 'Enter student ID:',
            },
        ])
        .then((answers) => {
            students.push(answers as Student);
            console.log('Student added successfully!');
            mainMenu();
        });
}

function viewStudents() {
    console.log('List of students:');
    students.forEach((student) => {
        console.log(`Name: ${student.name}, ID: ${student.id}`);
    });
    mainMenu();
}

function mainMenu() {
    inquirer
        .prompt({
            type: 'list',
            name: 'option',
            message: 'Choose an option:',
            choices: ['Add Student', 'View Students', 'Exit'],
        })
        .then((answer) => {
            switch (answer.option) {
                case 'Add Student':
                    addStudent();
                    break;
                case 'View Students':
                    viewStudents();
                    break;
                case 'Exit':
                    console.log('Exiting...');
                    break;
            }
        });
}

console.log('Welcome to Student Management System');
mainMenu();