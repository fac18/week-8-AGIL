# week-8-AGIL

Team AGILé

![](https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif)

### Installation instructions
clone the repo
run npm i 
check our tests with npm test or check individual parts with npm testdb and npm testserver

Our app seems to have stopped working on heroku...

Tests

[![codecov](https://codecov.io/gh/fac18/week-8-AGIL/branch/master/graph/badge.svg)](https://codecov.io/gh/fac18/week-8-AGIL)

[![Build Status](https://travis-ci.com/fac18/week-8-AGIL.svg?branch=master)](https://travis-ci.com/fac18/week-8-AGIL)

## Project

Build a server-rendered full-stack app

### Task

- Build an app using the Express framework.
- Use a PostgreSQL database to store and retrieve your data.
- Use the retrieved data to populate a Handlebars template for _server-side_ rendering to be displayed on the front-end.

### User Stories
As a member of FAC, I would like to: 

- submit a profile with details about myself
- see the details of other FAC friends
- delete my profile if I so choose (GDPR!!)

### Goals

✅ The primary aim of this project is to get comfortable with setting up an Express server and 

✅ to discover the awesomeness of Handlebars! Spend time considering how to format your layouts, partials and helper functions.

✅ Include tests and set up code coverage.

We expect to see unit tests of pure functions, 

✅ integration tests of your server routes, 

✅ including tests for errors such as 404.

✅  You should write tests for your database and use a separate test database and build script.

Use Heroku or a similar service to host the app and the database.

✅ Try to include ES6 syntax on the server.

![](https://media.giphy.com/media/xSYLxjcvDAMlW/giphy.gif)

### We learnt: 

-  In express this line means you don't need to ref public in the route for your images or css files coming from the html file because it's already done!

``app.use(express.static(path.join(__dirname, "..", "public")));``

- Don't change names of things! We changed some column names part way through (eg rename 'name' in the users table to 'user_name', and then had to go scouting for other instances all across different files
