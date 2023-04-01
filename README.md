# Environment variables in node.js

This project will allow you to practise using the `process.env` environment variable as well as the `dotenv` package

## What you will be doing

This project will allow to you practise:

> Using environment variables in node.js applications

This project assumes you've already had experience with:

- npm
- JavaScript

## Tasks

Perform the following tasks inside the `server.js` file

## Task 1 - Playing with process.env

1. Inside the file `server.js`, use `console.log` to display the contents of the `process.env` variable

2. Add the following data to the `process.env` object:

```text
SERVER_NAME = 'Papagei 5000'
SERVER_CPU = 'Archimedes MMX'
SERVER_URL = 'http://localhost:5000/'
SERVER_LOG = 'LOG.txt'
```

3. Use `console.log` to display each of the values you added to `process.env`

## Task 2 - Initialising package.json

For the following tasks, we are going to use the `dotenv` package

In order to do that, we must make some changes to our application

1. Run the command `npm init -y`

> Note: The `-y` flag just tells the `npm` command to not bug you with annoying questions!

2. Add the following line to your `package.json` file;

```json
"type": "module"
```

> Note: This is so that you can use ES6 modules inside node.js applications

## Task 3 - Installing dotenv

1. Install the `dotenv` package using the following command

```shell
npm i dotenv
```

2. Import the dotenv package

```javascript
import dotenv from 'dotenv';
```

## Task 4 - .env

1. Create the file `.env`

> Notice: There is a `.` at the start of the filename. This is on purpose.

2. Add the values you previously added to `process.env` into the `.env` file

##### Example
```text
KEY = value
SERVER_NAME = Papagei 5000
```

3. Remove the changes you made to `process.env`. We no longer need them.

## Task 5 - Configuring .env

As a software developer, you will have to spend a lot of time reading documentation

You will learn how to use `dotenv` from the documentation

1. Visit the website [https://github.com/motdotla/dotenv#config](https://github.com/motdotla/dotenv#config)
   
2. Read the `dotenv` documentation on how to configure and read the values from the `.env` file

3. Use `console.log` to print the following message in the console, filling in the values with the values from the `.env` file:

> "Hallo! Ich bin {SERVER_NAME}! Ich habe ein {SERVER_CPU}, und mein URL ist {SERVER_URL}. Ich schreibe alles was passiert zu {SERVER_LOG}"

4. Test your code

## Task 6 - .gitignore

If you run the command `git status`, you will notice that `.git` is aware of the `.env` file

We can't allow the `.env` file to be added to git

1. Create the file `.gitignore`

2. Add the name of the file you want to ignore here
   
3. Run the `git status` command again - you should notice that the `.env` file is no longer there
