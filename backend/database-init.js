const mysql = require('mysql');
const bcrypt = require('bcrypt');

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

let dropdb = "DROP DATABASE IF EXISTS groupomania";
db.query(dropdb, err => {
    if (err) {
        throw err;
    }
    else {
        console.log('Suppresion de la bdd actuelle');
    }
})


let createdb = "CREATE DATABASE groupomania";
db.query(createdb, err => {
    if (err) {
        throw err;
    }
    console.log("Creation de la bdd groupomania");
});



let usedb = 'use groupomania';
db.query(usedb, err => {
    if (err) {
        throw err;
    }
    console.log('Utilisation de groupomania');
});

let createUserTable =   `CREATE TABLE users (
                        u_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
                        prenom VARCHAR(100) NOT NULL,
                        nom VARCHAR(100) NOT NULL,
                        email VARCHAR(100) NOT NULL UNIQUE,
                        password VARCHAR(100) NOT NULL,
                        u_img_path VARCHAR(255)
                        )`;
db.query(createUserTable, err => {
    if (err) {
        throw err;
    }
    console.log('Creation de la table des utilisateurs');
});

let createArticleTable =    `CREATE TABLE articles (
                            a_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
                            a_user_id INTEGER NOT NULL,
                            a_text_content VARCHAR(2000),
                            a_img_path VARCHAR(255) 
                            )`;
db.query(createArticleTable, err => {
    if (err) {
        throw err;
    }
    console.log('Creation de la table des articles');
});

let createCommentTable =    `CREATE TABLE comments (
    c_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    c_article_id INTEGER NOT NULL,
    c_user_id INTEGER NOT NULL,
    c_text_content VARCHAR(2000)
    )`;
db.query(createCommentTable, err => {
    if (err) {
    throw err;
    }
    console.log('Creation de la table des commentaires');
});


bcrypt.hash('adminpassword', 10) // Modifier le mdp admin par defaut ici
    .then(hash => {
        let adminpw = hash;
        let createAdminUser =   `INSERT INTO users (\`prenom\`, \`nom\`, \`email\`, \`password\`, \`u_img_path\`)
                        VALUES
                        ('admin', 'admin', 'admin@groupomania.com', '${adminpw}', './images/admin.jpeg')
                        `;
        db.query(createAdminUser, err => {
            if (err) {
            throw err;
            }
            console.log('Creation de l\'utilisateur admin');
            console.log('Initialisation terminee !');
            process.exit();
        });
    })
    .catch(error => {throw err;});

