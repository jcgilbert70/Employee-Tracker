
  # Employee-Tracker
  

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
 
  ## Description
  description of project
  
## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

  ## Table of Contents
  - [Installatoin](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Questions](#questions)
  
 
  ## Installation
  
  To install use command: 

  npm i
  
 
  ## Usage
  
  - In order to use this application you first need to clone the repository to your local machine.
  - Then follow installation instructions to install all dependecnies for the application withing the directory
  - You will need to seed your database on your local machine by using "SOURCE ./db/Schema.sql;" and "SOURCE ./db/seeds.sql;" commands while within mysql after locating the applications directory.
  - Now you can run the application by using "npm start"
  - Currently the only way to delete information is to reload the database which will get rid of all information and start new.
 
 
  ## Contributing
  

  If you would like to contribute to this repository, follow these instructions: 
  

   This repository is open to the public to access, please feel free to comment.
  

   ## Screenshot

  <img src="./img/screenshot.png" width="600">


  ## Links

  Video Demo
  https://app.castify.com/watch/fad6f253-2d22-4753-b845-62a692aebdc3

  Repository
  https://github.com/jcgilbert70/Employee-Tracker.git
  
 
  ## Questions
  Any questions about this project please contact the creator jcgilbert70 at:
  jcgilbert70@gmail.com
  

  Check out other repositories by this creator at: https://github.com/jcgilbert70
  

  ## License: MIT
  
  MIT License Link: https://opensource.org/licenses/MIT

  
