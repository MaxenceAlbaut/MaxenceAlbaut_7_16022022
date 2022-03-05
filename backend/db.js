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

module.exports = db;