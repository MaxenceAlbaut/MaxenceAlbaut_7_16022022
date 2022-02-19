// Importations
const express = require('express');
const userRoutes = require('./routes/user');
//  const articleRoutes = require('./routes/article');


/*
const mysql = require('mysql');
// Creation de la connection a la bdd mysql
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwertyui'
});
// Connexion a mysql
db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('Connexion a mysql reussie');
});
db.query('USE groupomania', err => {
    if (err) {
        throw err;
    }
    console.log('Utilisation de la bdd groupomania');
});

*/

const path = require('path');

const app = express();

// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/auth', userRoutes);
//  app.use('/api/article', articleRoutes);


module.exports = app;