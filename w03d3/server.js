const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 8881;

app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// DATABASE
const users = {
  'nally': {
    username: 'nally',
    password: 'password'
  },
  'monkey': {
    username: 'monkey',
    password: 'fuzz'
  },
};

// ROUTES
app.get('/', (req, res) => {
  console.log('users', users);
  res.render('home');
});

// Registration Route
app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  const requestedUsername = req.body.username;
  const requestedPassword = req.body.password;

  if (users[requestedUsername]){
    res.send('user already exists. <a href="/">Home</a>');
    return;
  } else {
    users[requestedUsername] = {
      username: requestedUsername,
      password: requestedPassword
    };
    res.redirect('/login');
  }

});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const candidateUsername = req.body.username;
  const candidatePassword = req.body.password;

  if (!users[candidateUsername]){
    console.log('username does NOT exist');
    res.redirect('/');
    return;
  }

  if (candidatePassword === users[candidateUsername].password) {
    console.log(`passwords match`);
    res.cookie('user', candidateUsername);
    res.redirect('/profile');
  } else {
    console.log('passwords do NOT match');
    res.redirect('/');
  }
});

app.get('/profile', (req, res) => {
  console.log('req.cookies', req.cookies);
  const userCookie = req.cookies.user;
  if (users[userCookie]){
    const templateVars = {
      username: userCookie,
      password: users[userCookie].password
    };
    res.render('profile', templateVars);
  } else {
    res.redirect('/login');
  }

});

app.get('/logout', (req, res) => {
  res.clearCookie('user');
  res.redirect('/');
});


app.listen(PORT, () => {
  console.log(`Server is listening to PORT=${PORT}`);
});