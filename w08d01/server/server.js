const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3002;

app.use(morgan('dev'));

const todos = [
  {
    id: 1,
    task: 'do laundry'
  },
  {
    id: 2,
    task: 'wash dishes'
  },
  {
    id: 3,
    task: 'study'
  },
];

const users = [
  {
    id: 1,
    username: 'alice'
  },
  {
    id: 2,
    username: 'bob'
  },
];

// GET /todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// GET /users
app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
