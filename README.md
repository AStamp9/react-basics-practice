# React Basics Workshop

### Set up
- create a repo in git hub and clone it in a directory for VS Code
- run 'npm create@latest .' and follow promps to create a react using javascript.
- run 'npm i' to install npm
- run 'npm run dev' to run application
- copy local host and past into browser to show app
- delete assets in the sorce folder
- remove everything from app.css except root
- move root from index.css to App.css and delete index.css if you want all of the css in one file
- ensure main.jsx imports App.css and not index.css
- remove import reactLogo and import vite logo from App.jsx
-  delete everything inside of the App function in App.jsx
- create 'components' and 'context' folders under src

### Task 1: 
- return a statement "Hello World" by using the function inside of App.jsx

### Task 2: Bootstrapping
**This is where the application starts.** It is responsible for tying together the app's root component, any context providers or routing, and mounting it to the DOM.
- import React from 'react'
- if using routing, import {BrowserRouter} from 'react-router-dom'; and wrap your root component with it. run 'npm install react-router-dom'
- import '/App.css'
- import App from '/App.jsx

**What's Happening in This File:**
 - **Import Statements:**
    - React is imported for JSX transformations.
    - createRoot is imported from "react-dom/client" to create a root for your app.
    - BrowserRouter is imported from "react-router-dom" to handle routing.
    - App is your main application component.
    - ./index.css imports your global styles.
**Mounting the App:**
- createRoot(document.getElementById("root")) finds the DOM element with the ID "root" (usually defined in your HTML file) and prepares it to host your React app. 
- The .render(...) method then mounts your app inside a <React.StrictMode> wrapper (which helps highlight potential problems) and wraps your app in <BrowserRouter> if you’re using client-side routing.

*This process sets everything in motion—loading global styles, preparing routing, and finally displaying your application in the browser.*

### Task 3: Parent Component
- create a Parent.jsx file in component folder
- import React from 'react'
- create a function named Parent. Take no inputs. return 'Hi! I am the parent'
- export default Parent at the end of the file
- Import Parent in App.jsx 
- Add <Parent /> tag to return statment in App.jsx. You should see 'Hi! I am the parent'
*You just created a component and passed it to the App!! Now lets create a last name and pass it to a child.*
- make a const named drilledLastName inside of the Parent function and set it equal to any last name(string)
- add {drilledLastName} to your return statement in Parent.jsx. Pay attention to the app to notice changes

### Task 4: Child Component Prop Drill
- In Parent.jsx add <Child lastName={drilledLastName} /> to the return statment. This sends the Child a property (prop) lastName, and the value of the drilledLastName variable. 
- create a Child.jsx file in the component folder
- import React from 'react'
- make a function named Child that takes in the {lastName} prop and return 'Hello i am the child, and my last name is {lastName}'
- Import child into Parent.jsx
*You should see lines of text from parent and child in the browser.*

### Task 5: Grandchild Component Prop Drill
- Create Grandchild.jsx, pass the last name prop to the grandchild, and display another line of text in the browser 

### Task 6: Create Context for Second Last Name
- create LastNameContext.jsx in content folder
- import { createContext } from 'react';
- make a const LastNameContext variable and set it equal to createContext('Doe'). This sets the default last name
- export default LastNameContext;

- import LastNameContext from '../context/LastnameContext'; in Parent.jsx
- Add const secondLastName = 'Johnson'; to the function
- Wrap the return statment with <LastNameContext.Provider value={secondLastName}><LastNameContext.Provider>
- Add const theSecondLastName = useContext(LastNameContext); to the function in Child.jsx
