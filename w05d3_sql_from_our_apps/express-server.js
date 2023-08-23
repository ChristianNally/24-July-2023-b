const express = require('express');
const pg = require('pg');
const PORT = 8083;
const app = express();

// Configuration
app.set('view engine', 'ejs');

// Database
const Client = pg.Client;

const configObject = {
  user: 'postgres',
  host: 'localhost',
  database: 'spot',
  password: 'postgres',
  port: 5433
};

const client = new Client(configObject);

client.connect()
.then(() => {
  console.log(`DB Connection has been made.`);
})
.catch((error) => {
  console.log(`Error: ${error}`);
});

// Middleware
app.use(express.urlencoded({ extended: true }));

// Routes

// Browse
app.get('/', (req, res) => {

  client.query('SELECT id, type, question, day_id FROM objectives ORDER BY day_id, sort;')
  .then((data) => {
    console.log('BROWSE data', data);
    const templateVars = {
      objectives: data.rows
    };
    res.render('home', templateVars);
  })
  .catch((error) => {
    console.log(`BROWSE SELECT Error: ${error}`);
    res.render('home', {objectives: []});
  });

});

// Add
app.get('/objectives/new', (req, res) => {
  res.render('new');
});

app.post('/objectives/new', (req, res) => {
  console.log('req.body', req.body);
  client.query('INSERT INTO objectives (question, answer, type, sort) VALUES ($1, $2, $3, $4) RETURNING *', [req.body.question, req.body.answer, req.body.type, req.body.sort])
  .then((data) => {
    console.log('data returned from insert', data);
    res.redirect(`/objectives/${data.rows[0].id}`);
  })
  .catch((error) => {
    console.log(`INSERT ERROR:`, error);
    res.redirect('/');
  });
});

// Read
app.get('/objectives/:id', (req, res) => {
  const id = req.params.id;
  console.log('id', id);
  client.query(`SELECT id, type, question, answer, sort, day_id FROM objectives WHERE id = $1;`, [id])
  .then((data) => {
    console.log('READ data', data);
    const templateVars = {
      objectives: data.rows
    };
    res.render('read', templateVars);
  })
  .catch((error) => {
    console.log(`READ SELECT Error: ${error}`);
    res.render('home', {objectives: []});
  });

});

// Edit

// Delete


// Listen

app.listen(PORT, () => {
  console.log(`Server is listening on port=${PORT}`);
});