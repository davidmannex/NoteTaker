// Require Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3001;

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// Require routes files 
require('./routes/routes.js')(app);
console.log("server");
// Setup listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  


