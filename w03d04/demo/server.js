const express = require('express');
const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session'); 
const bcrypt = require('bcryptjs');

const app = express();
const port = 8002;

// config
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); // req.body
// app.use(cookieParser()); // req.cookies
app.use(cookieSession({
  name: 'whatever',
  keys: ['asdl;fjasdklfj']
})); // req.session

// user database
const users = {
  abc: {
    id: "abc",
    email: "a@a.com",
    password: "$2a$10$zY2N2nn1Wtj27wugksjm3eLB8D/Ev5nuqJuDT6/fTh.xoY.aflUdm",
  },
  def: {
    id: "def",
    email: "b@b.com",
    password: "$2a$10$zY2N2nn1Wtj27wugksjm3eLB8D/Ev5nuqJuDT6/fTh.xoY.aflUdm",
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
  const result = bcrypt.compareSync(password, foundUser.password)
  if (!result) {
    return res.status(400).send('passwords do not match');
  }

  // happy path! the user is who they say they are
  // res.cookie('userId', foundUser.id);
  req.session.userId = foundUser.id;
  // req.session.languagePref = 'fr';
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

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const newUser = {
    id: id,
    email: email,
    password: hash
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
  // const userId = req.cookies.userId;
  const userId = req.session.userId;

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
  // res.clearCookie('userId');
  // req.session.userId = null; // {}
  req.session = null;
  res.redirect('/login');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
