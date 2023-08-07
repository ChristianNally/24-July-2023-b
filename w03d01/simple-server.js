const http = require('http');

const server = http.createServer();
const port = 8080;

// listener
server.on('request', (request, response) => {
  // console.log('a request came in!!!');
  console.log(request.method, request.url);

  if (request.method === 'GET' && request.url === '/home') {
    response.write('welcome to the home page!');
  } else if (request.method === 'GET' && request.url === '/about') {
    response.write('this is the about page!');
  } else {
    response.write('the page you are looking for does not exist');
  }

  response.end();
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
