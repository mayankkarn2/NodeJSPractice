const express = require('express');

const app = express();

app.use(function (req, res, next) {
    next();
})

app.get('/', function (req, res) {
    console.log("From /")
    res.send('Hello From /');
})

app.get('/profile', function (req, res) {
    console.log("From /profile")
    res.send('Hello from profile');
})
app.listen(3000);