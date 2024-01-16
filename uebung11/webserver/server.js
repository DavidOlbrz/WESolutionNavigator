const http = require('http');
// https://www.w3schools.com/nodejs/nodejs_url.asp
const url = require('url');

const port = 8085;

// https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module
const server = http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true);
    response.setHeader('Content-Type', 'text/plain');
    if (parsedUrl.pathname === '/hello' && parsedUrl.query.name) {
        response.writeHead(200);
        response.end(`Hallo ${parsedUrl.query.name}!`);
    } else {
        response.writeHead(404);
        response.end('Error');
    }
});

server.listen(port);

// start server with `node server.js`
// webserver available at http://localhost:8085
// send a request via url: `http://localhost:8085/hello?name=David`