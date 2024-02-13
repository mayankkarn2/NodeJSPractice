const http = require('http'); //here the actual file name is http.js, NodeJS automatically adds the .js part

//You can also import your own files using ./ files (Absolute Path)



const server = http.createServer(function rqlistener(req, res) {

    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type = "text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    // console.log(req.url, req.method, req.headers); //This function is called event listener



    // process.exit(); //Will stop the server
});

server.listen(3000);





