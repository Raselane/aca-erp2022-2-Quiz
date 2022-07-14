export const Questions = [
    {
        prompt: "What is the git command that downloads your repository from GitHub to your computer?",
        A: "git push",
        B: "git commit",
        C: "git fork",
        D: "git clone",
        ans: "D",
        summary: "This command was used in the terminal to download the Quiz App repository from Github.",
        Usage: "git clone https://github.com/africacodeacademy/aca-erp2022-2-Quiz.git"
    },
    {
        prompt: "What is the git command that adds new or changed files in the working directory to the Git staging area?",
        A: "git add",
        B: "git commit",
        C: "git fork",
        D: "git clone",
        ans: "A",
        summary: "git add command was used in the terminal with option -A to add all new or changed files in the quiz app working directory to the Git staging area. This command is used before \"Git commit\"",
        Usage: "git add -A",
    },
    {
        prompt: "What is the git command that saves changes to the local repository?",
        A: "git push",
        B: "git commit",
        C: "git fork",
        D: "git clone",
        ans: "B",
        summary: "\"git commit -m\", (-m for message), command was used in a terminal to save changes that were made to all files in a local repository. This command is used after \"Git add\"",
        Usage: "git commit -m \"My First Commit\"",
    },
    {
        prompt: "What is the git command that uploads files to Github repository?",
        A: "git push",
        B: "git commit",
        C: "git fork",
        D: "git clone",
        ans: "A",
        summary: "This command was used in Git Bash to upload the Quiz App files to Github. This command is used after \"Git commit\"",
        Usage: "git push"
    },
    {
        prompt: "What is the git command that is used to list all remote branches?",
        A: "git remote branch",
        B: "git remote branch --list",
        C: "git branch -d <branch>",
        D: "git clone -a",
        ans: "D",
        summary: "git branch -a, (-a for all) is used to list all the branches of a github repository",
        Usage: "git branch -a"
    },
    {
        prompt: "What is the git command that is used to display the state of a working directory and the staging area?",
        A: "git remote state",
        B: "git display state",
        C: "git status",
        D: "git show status",
        ans: "C",
        summary: "git status, command lets you see which changes have been staged, which haven't and which files aren't being tracked by Git",
        Usage: "git status"
    },
    {
        prompt: "What is the git command that is used to display committed snapshots?",
        A: "git remote commit",
        B: "git log",
        C: "git clone snapshots",
        D: "git history",
        ans: "B",
        summary: "git log lets you list the project history, filter it, and search specific changes. This command was used to show the Quiz App project history during development process",
        Usage: "git log"
    },
    {
        prompt: "What is the npm command used to start your react js app?",
        A: "npm react",
        B: "node react-app",
        C: "create react-app",
        D: "npm start",
        ans: "D",
        summary: "This command was used in the terminal in Quiz App working directory to start the Quiz App which then opens the browser at \"http://localhost:3000/\" by default",
        Usage: "npm start"
    },
    {
        prompt: "Which of the following commands is used to install bootstrap?",
        A:"install bootstrap",
        B:"npm install react-bootstrap",
        C:"npm add bootstrap",
        D:"npm install bootstrap",
        ans: "D",
        summary: "This command was used to install bootstrap which is a framework that is built on the top of CSS and CSS3. Bootstrap is used for making the pages responsive in nature. Bootstrap was used in the Quiz App to make its components responsive.",
        Usage: "npm install bootstrap"
    },
    {
        prompt: "Which of the following commands is used to install react-bootstrap?",
        A:"npm install react-bootstrap",
        B:"npm install reactbootstrap",
        C:"npm install -f react bootstrap",
        D:"install -g bootstrap",
        ans: "A",
        summary: "This command was used to install react-bootstrap which is library of reusable front-end components combining the structure of React with the look-and-feel of Bootstrap. The react-bootstrap was used in the Quiz App to style the components using bootstrap.",
        Usage: "npm install react-bootstrap"
    },
    {
        prompt: "What of the following is a version control system?",
        A:"Circleci",
        B:"Heroku",
        C:"Git",
        D:"TDD",
        ans: "C",
        summary: "Git is the popular version control system that was used in the Quiz App for tracking changes that were made. It increases speed and efficiency in small and large projects.",
        Usage: "To use git, first install it"
    },
    {
        prompt: "What are React Hooks?",
        A:"Special functions that allow function components to have access to state and other React features",
        B:"Objects in React that allow React to store data",
        C:"Functions that maintain the state of react components",
        D:"Middlewares that allow React to make API calls",
        ans: "A",
        summary: "Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.",
        Usage: "To use react hooks, first import them from react e.g, \"import {useContext} from \'react\';"
    },
    {
        prompt: "Which of the following is a React Hook?",
        A:"Class",
        B:"useEffect",
        C:"Function",
        D:"Axios",
        ans: "B",
        summary: "useEffect is the react hook that lets you perform side effects in function components.",
        Usage: "To make use of useEffect in the Quiz App, useEffect was first imported from react e.g, \"import {useEffect} from \'react\';"
    },
    {
        prompt: "Which of the following is the function of useState hook?",
        A:"useState Hook allows us to track state in a function component",
        B:"useState Hook allows you to perform side effects in your components",
        C:"useState allows you to store data locally",
        D:"useState allows you to start the React component",
        ans: "A",
        summary: "useState is the react hook use to maintain the state of the function component.",
        Usage: "To make use of useState in the Quiz App, useSate was first imported from react e.g, \"import {useState} from \'react\';"
    },
    {
        prompt: "Which of the following is the function of useEffect hook?",
        A:"useEffect Hook allows us to track state in a function component",
        B:"useEffect allows you to start the React component",
        C:"useEffect Hook allows you to perform side effects in your components",
        D:"useEffect allows you to store data locally",
        ans: "C",
        summary: "useEffect is the react hook that lets you perform side effects in function components. In this quiz app, useEfect was used to put focus effect on the username input field when the page loads.",
        Usage: "To make use of useEffect in the Quiz App, useEffect was first imported from react e.g, \"import {useEffect} from \'react\';"
    
    },
    {
        prompt: "Which of the following React Hooks is used to share state between deeply nested components?",
        A:"useState",
        B:"useEffect",
        C:"useContext",
        D:"useCounter",
        ans: "C",
        summary: "useContext provides a way to pass data or state through the component tree without having to pass props down manually through each nested component.",
        Usage: "To make use of useContext in the Quiz App, useContext was first imported from react e.g, \"import {useEffect} from \'react\'; and was used to pass username to other components in a tree."
    
    },
    {
        prompt: "What is Github?",
        A:"A text editing tool that is used by most developers",
        B:"A CI/CD tool that automates the React application testing",
        C:"A code hosting platform for collaboration and version control.",
        D:"A hosting service that makes a website live",
        ans: "C",
        summary: "Github is a code hosting platform that lets you (and others) work together on projects.",
        Usage: "Github was used to host the Quiz App source code ."
    
    },
    {
        prompt: "Which of the following commandlets is used to make a directory?",
        A:"npm dir",
        B:"mkdir",
        C:"make dir",
        D:"cd dir",
        ans: "B",
        summary: "mkdir is a command used to make directories/folders. This commandlets was used to create foldes in a Quiz App project",
        Usage: "mkdir <folder-name>"
    
    },
    {
        prompt: "Which of the following is an IDE",
        A:"Visual Studio Code",
        B:"Microsoft Word",
        C:"Git Bash",
        D:"Github",
        ans: "A",
        summary: "Visual Studio Code is a IDE(Integrated Development Tool) that was used to develop Quiz App",
        Usage: "Download VS Code at https://code.visualstudio.com/Download"
    
    },
    {
        prompt: "What git command is used to switch between branches",
        A:"git switch <branch-name>",
        B:"git pull <branch-name>",
        C:"git checkout <branch-name>",
        D:"git branch -r",
        ans: "A",
        summary: "Visual Studio Code is a IDE(Integrated Development Tool) that was used to develop Quiz App",
        Usage: "Download VS Code at https://code.visualstudio.com/Download"
    
    },
    
]