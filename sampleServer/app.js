const express = require('express');

const app = express();

// app.use(function(req, res, next){}) generally significes a presence of middleware. What is middleware? Middleware is a piece
// of code that always executes before any route is called. In the below example, we have two middlewares
// Middleware 1 and Middleware 2. Let us any route for ex, /profle is called, so before actually going
// into the /profile route, the middleware 1 and middleware2 are called. A Middleware always takes function
// as an arguement which contains three parameter req, res, next. The next() method shoulc always be called
// so that the code does not get struck in the middleware. next() will usually push the execution either no another
// middleware if any other exists or push the code to route /profile if no other middleware exists.

app.use(function (req, res, next) {
    console.log('In Middleware 1')
    next();
})

app.use(function (req, res, next) {
    console.log('In Middleware 2')
    next();
})

// GET route
app.get('/', function (req, res) {
    console.log("From /")
    res.send('Hello From /');
})

// GET route
app.get('/profile', function (req, res) {
    console.log("From /profile")
    res.send('Hello from profile');
})

// Dynamic Get Route
app.get('/profile/:username', function (req, res) {
    console.log('From a user profile');
    res.send('Hello from a user profile');
})
app.listen(3000);