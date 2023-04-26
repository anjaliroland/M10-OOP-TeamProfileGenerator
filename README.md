# Team Profile Generator

## Table of Contents

- [Overview](#overview)
    - [User Story](#user-story)
    - [Acceptance Criteria](#acceptance-criteria)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
    - [Screenshot](#screenshot)
- [License](#license)

## Overview

### User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

### Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```


## Technologies Used

<ul>
<li>HTML
<li>CSS
<li>JavaScript
<li>Node
<li>Inquirer
<li>Jest
</ul>

## Usage

Video Demo: https://drive.google.com/file/d/1a4RjZgkGvl9Nbh-WshhAjL-ie2fR-K_g/view?usp=sharing

### Screenshot 

![screenshot of generated html](./util/images/screenshot.png)

## License

Please refer to the LICENSE in the repo.

## Links

Inquirer Docs: https://www.npmjs.com/package/inquirer

Jest Docs: https://jestjs.io/docs/getting-started