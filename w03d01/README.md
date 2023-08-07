# W03D01 - Web Servers 101

### To Do
- [x] Web Servers
- [x] Express
- [x] Middleware
- [x] Common Errors
  - [x] Address in Use
  - [x] Cannot Set Headers

### Web Server?
* server - has information
* client - wants information
* web server - raw data, images, videos
* understands HTTP

### Hyper-Text Transfer Protocol (HTTP)
* built on top of TCP
* impose order on communication
* request / response
* a stateless protocol => neither is required to remember any previous interaction

### Request
* host address / ip address (street address)
* port (apt number) 65,535 to choose from
  * http 80
  * https 443
  * ssh 22
  * postgres 5432

* verb/method => what you want to accomplish
  * GET => retrieve a resource
  * POST => send information
* url/endpoint => what you want to do it to
  * `/home`, `/about`
* body

http://localhost:3000 /register

https://web.compass.lighthouselabs.ca /p/4/days/w03d1/activities/178

### Response
* status code (how did the request go?)
  * 1xx => routing codes
  * 2xx => everything is a-okay
  * 3xx => redirection codes
  * 4xx => user has made a mistake
  * 5xx => server is down
* body => image, video, text, html

```js
// last week
const net = require('net')

const server = net.createServer(); // TCP

server.on('data', (data) => {
  console.log(data);
});

server.listen(3000);
```

```js
// this week
const http = require('http')

const server = http.createServer(); // HTTP

server.on('request', () => {});

server.listen(3000);
```

### Middleware
* code that runs between the request and the response


client <=========== tcp/http ===============> server

client <===> middleware <===> middleware <===> middleware <===> server
             body-parser      cookie-parser      logger
            request.body      request.cookies   console.log()
              request

username=alice&password=bob
request.body = {
  username: 'alice',
  password: 'bob'
}

```js
const user = {username: 'bob'};

const changeMyUser = (user) => {
  user.username = 'Carol';
};

changeMyUser(user);
```














