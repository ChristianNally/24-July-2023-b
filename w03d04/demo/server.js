const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();
const port = 8002;

// config
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// user database
const users = {
  abc: {
    id: "abc",
    email: "a@a.com",
    password: "1234",
  },
  def: {
    id: "def",
    email: "b@b.com",
    password: "5678",
  },
};

// GET /login
app.get('/login', (req, res) => {
  res.render('login');
});

// POST /login
app.post('/login', (req, res) => {
  // grab the email and password from the request body
  const email = req.body.email;
  const password = req.body.password;

  // did they NOT provide an email and password
  if (!email || !password) {
    return res.status(400).send('please provide an email address and a password');
  }

  // find the user based on their email
  let foundUser = null;
  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      foundUser = user;
    }
  }

  // did we NOT find a user
  if (!foundUser) {
    return res.status(400).send('no user with that email address found');
  }

  // do the passwords NOT match
  if (foundUser.password !== password) {
    return res.status(400).send('passwords do not match');
  }

  // happy path! the user is who they say they are
  res.cookie('userId', foundUser.id);
  res.redirect('/protected');
});

// GET /register
app.get('/register', (req, res) => {
  res.render('register');
});

// POST /register
app.post('/register', (req, res) => {
  // grab the email and password from the request body
  const email = req.body.email;
  const password = req.body.password;

  // did they NOT provide an email and password
  if (!email || !password) {
    return res.status(400).send('please provide an email address and a password');
  }

  // find the user based on their email
  let foundUser = null;
  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      foundUser = user;
    }
  }

  // did we find a user
  if (foundUser) {
    return res.status(400).send('a user with that email already exists');
  }

  // create a new user object
  const id = Math.random().toString(36).substring(2, 5);
  const newUser = {
    id: id,
    email: email,
    password: password
  };
  
  // update the users database
  users[id] = newUser;
  console.log(users);

  // redirect the user to the login page
  res.redirect('/login');
});

// GET /protected
app.get('/protected', (req, res) => {
  // grab the userId from the cookie
  const userId = req.cookies.userId;

  // is the userId undefined
  if (!userId) {
    return res.status(401).send('you must be logged in to see this page');
  }

  // look up the user based on their id
  const user = users[userId];

  // render the protected page
  const templateVars = {
    user: user
  };
  res.render('protected', templateVars);
});

// POST /logout
app.post('/logout', (req, res) => {
  res.clearCookie('userId');
  res.redirect('/login');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
