# week-8-AGIL

Team AGILé

![](https://media.giphy.com/media/UatRnEUNX8iCQ/giphy.gif)

### Installation instructions
1. clone the repo ```git clone https://github.com/fac18/week-8-AGIL.git```
2. run ```npm i``` 
3. check our tests with ```npm run test```

Or test database and server separately with:
  * ```npm run testdb```
  * ```npm run testserver```

Tests

[![codecov](https://codecov.io/gh/fac18/week-8-AGIL/branch/master/graph/badge.svg)](https://codecov.io/gh/fac18/week-8-AGIL)

[![Build Status](https://travis-ci.com/fac18/week-8-AGIL.svg?branch=master)](https://travis-ci.com/fac18/week-8-AGIL)

## Project

Build a server-rendered full-stack app


.... FAC 18 Yearbook!

![](https://i.imgur.com/wRWHHBk.png=100x)


### Task

- Build an app using the Express framework
- Use a PostgreSQL database to store and retrieve your data
- Use the retrieved data to populate a Handlebars template for _server-side_ rendering to be displayed on the front-end

### User Stories
As a member of FAC, I would like to: 

- see a gallery of fellow FACsters
- submit a profile with details about myself
- see the details of other FAC friends
- delete my profile if I so choose (GDPR!!)
- click on a link and be directed to the FAC projects gallery

### Goals

✅ The primary aim of this project is to get comfortable with setting up an Express server and 

✅ to discover the awesomeness of Handlebars! Spend time considering how to format your layouts, partials and helper functions.

✅ Include tests and set up code coverage

🤪 We expect to see unit tests of pure functions

✅ integration tests of your server routes

✅ including tests for errors such as 404

✅  You should write tests for your database and use a separate test database and build script

✅ Use Heroku or a similar service to host the app and the database

✅ Try to include ES6 syntax on the server

![](https://media.giphy.com/media/xSYLxjcvDAMlW/giphy.gif)

### Schema

![](https://i.imgur.com/AmceXjV.png)

### We learnt: 

-  In express this line means you don't need to ref public in the route for your images or css files coming from the html file because it's already done!

``app.use(express.static(path.join(__dirname, "..", "public")));``

- Don't change names of things! We changed some column names part way through (eg rename 'name' in the users table to 'user_name', and then had to go scouting for other instances all across different files
