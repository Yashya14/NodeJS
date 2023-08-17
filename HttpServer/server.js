const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// create a server object
const server = http.createServer((req, res) => {  // req represents request from client
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // res.write("Hello yash!"); //write a response to the client
  res.write(req.url);
  res.end('Hello World\n'); // end the response
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
