const express = require('express');
const PORT = 8082;
const app = express();


//
// CONFIG
//
app.set('view engine','ejs');

//
// MIDDLEWARE
//
app.use(express.urlencoded({extended: false}));
app.use((req, res, next) => {
    console.log(`req.method: ${req.method} req.url: ${req.url}`);
    next();
});

//
// "DATABASE"
//
const db = {
    'burger': {
        name: 'burger',
        price: 12.99,
        vegan: true
    },
    'fries': {
        name: 'fries',
        price: 5.99,
        vegan: true
    },
};

//
// ROUTES
//

//
// BROWSE
//
app.get('/', (req, res) => {
    const listOfFoods = [];
    for (let item in db){
        listOfFoods.push(item);
    }
    const templateVars = {
        listOfFoods
    };
    res.render('home', templateVars);
});

//
// READ
//
app.get('/fooditem/:itemkey', (req, res) => {
    console.log('req.params.itemkey', req.params.itemkey);


    const foodItem = db[req.params.itemkey];
    // {
    //     name: 'vegan burger',
    //     price: 12.99,
    //     vegan: true
    // }

    const templateVars = {
        name: foodItem.name,
        price: foodItem.price,
        vegan: foodItem.vegan
    };
    res.render('food-item', templateVars);
});

//
// EDIT
//
app.get('/edit/:itemkey', (req, res) => {
    const templateVars = db[req.params.itemkey];
    console.log('templateVars', templateVars);
    res.render('edit', templateVars);
});

app.post('/edit/:key', (req, res) => {
    const key = req.params.key;
    console.log('req.body', req.body);

    db[key] = {
        name: req.body.name,
        price: req.body.price,
        vegan: req.body.vegan
    };

    res.redirect(`/fooditem/${key}`);

});



//
// ADD
//
app.get('/add', (req, res) => {
    res.render('add');
});

app.post('/add', (req, res) => {

    console.log('req.body', req.body);

    db[req.body.name] = {
        name: req.body.name,
        price: req.body.price,
        vegan: req.body.vegan
    };

    res.redirect('/');

});

//
// DELETE
//
app.get('/delete/:key', (req, res) => {
    const key = req.params.key;
    delete db[key];
    res.redirect('/');
});

// 404
app.get('*', (req, res) => {
    res.send('404');
});

// LISTEN for Connection

app.listen(PORT, () => {
    console.log(`Server is listening on port=${PORT}`);
});
