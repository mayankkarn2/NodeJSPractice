/* 

Steps to setup static files

1. Create a Folder called Public

2. Create three folders inside Public namely Images, Stylesheets, JavaScripts

3. Configure the express static in index.js

4. Understand the path

*/

const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000);