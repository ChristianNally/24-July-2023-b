const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 5001;

// middleware
// app.use((request, response, next) => {
//   console.log('inside the middleware');
//   request.secretKey = 'hello world';

//   // some long running process

//   next(); // our middleware is done; hand off to the next middleware/route handler
// });
app.use(morgan('dev'));

// GET /home
app.get('/home', (request, response) => {
  // console.log('the secret key is', request.secretKey);

  if (1 === 1) {
    response.send('You are on the home page!');
    return; // stop JS from running after we have responded
  }

  response.send('You are on the home page!');
});

// GET /about
app.get('/about', (request, response) => {
  response.send('this is the about page');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
