// Create web server application using express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use body-parser middleware to parse the body of incoming requests
app.use(bodyParser.json());

// Create a route to handle GET requests to the root URL (/)
app.get('/', function(req, res) {
    res.send('Hello World!');
});

// Create a route to handle GET requests to /comments
app.get('/comments', function(req, res) {
    // Send back a JSON response
    res.json(comments);
});

// Create a route to handle POST requests to /comments
app.post('/comments', function(req, res) {
    // Log request body to console
    console.log(req.body);
    // Push request body to comments array
    comments.push(req.body);
    // Send back a JSON response
    res.json(req.body);
});

// Start the server
app.listen(port, function() {
    console.log('Listening on port ' + port);
});

// Create an array to store comments
const comments = [
    { name: 'John', message: 'Hello World!' },
    { name: 'Mary', message: 'Hi, there!' }
];