/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DEPENDENCIES ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");






// Pseudo-Code
// Goals:
// 1. Survey for the user
// 2. Takes results of user's survey and compares their answers with those from other users.
// 3. App will display the name and picture of the user with the best overall match
// 4. App uses express to handle routing
// 5. Deploy app to Heroku

// Survey
// 10 questions (you choose), each anser should be ona scale of 1 to 5 based on how much the user agress or disagrees with a question


// html.Routes.js
// Include Two Routes:
// 1) A GET Route to /survey which should display the survey page.
// 2) A default USE route that leads to home.html which displays the home page.

// apiRoutes.js
// Include 2 Routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.




// Completed! :)
// Your server.js file should require the basic npm packages we've used in class: express, body-parser and path
// 
