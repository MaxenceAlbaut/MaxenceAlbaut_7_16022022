const mysql = require('mysql');

// Creation de la connection a la bdd mysql
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwertyui' // insert root password here
});

// Connexion a mysql
db.connect(err => {
    if (err) {
        throw err;
    }
    else {
        console.log('Connexion a mysql reussie');
    }
});

let usedb = 'use groupomania';
db.query(usedb, err => {
    if (err) {
        throw err;
    }
    console.log('Utilisation de groupomania');
});




let insertArticle1 = `INSERT INTO articles (\`user_id\`, \`text_content\`) VALUES ('1', "Premier article ecrit par l'utilisateur admin")`;
db.query(insertArticle1, err => {
    if (err) {
        throw err;
    }
    console.log("Insertion de l'article #1");
});



let insertArticle2 = `INSERT INTO articles (\`user_id\`, \`text_content\`)
                    VALUES
                    ('1', "Deuxieme article ecrit par l'utilisateur admin")`;
db.query(insertArticle2, err => {
    if (err) {
        throw err;
    }
    console.log("Insertion de l'article #2");
});



let insertArticle3 = `INSERT INTO articles (\`user_id\`, \`text_content\`)
                    VALUES
                    ('2', "Troisieme article ecrit par l'utilisateur numero 2")`;
db.query(insertArticle3, err => {
    if (err) {
        throw err;
    }
    console.log("Insertion de l'article #3");
    process.exit();
});
