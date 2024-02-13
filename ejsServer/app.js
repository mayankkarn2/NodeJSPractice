/* Template Engines like ejs are very to similar HTML which are converted to HTML later*/

const express = require('express');

const app = express();

/* 

Steps to setup ejs 

1. Install ejs - npm i ejs  

2. Configure ejs - app.set('view engine', "ejs")

3. Create a folder named views

4. Create ejs files inside your view folder

5. Use render instead of send. When you render make sure you only render the files container in the
    views folder without including the ejs.

*/

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});


// In the contact page, if you want to send some data such as email, you can send this data in the render method
// res.render('ejs_file', {data:you_want_to_send}). In your views > contact.ejs file, you can set the place you want
// to use this email as <% = email %>
app.get('/contact', (req, res) => {
    res.render('contact', { "email": "abc@xyz.com" });
});

app.listen(3000);