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




let insertArticle1 = `INSERT INTO articles (\`a_user_id\`, \`a_text_content\`) VALUES ('1', "Premier article ecrit par l'utilisateur admin")`;
db.query(insertArticle1, err => {
    if (err) {
        throw err;
    }
    console.log("Insertion de l'article #1");
});

let insertComment1 = `INSERT INTO comments (\`c_article_id\`, \`c_user_id\`, \`c_text_content\`) VALUES ('1', '1', '1er commentaire par admin')`;
db.query(insertComment1, err => {
    if (err) {
        throw err;
    }
    console.log("Insertion du commentaire #1");
});

let insertComment2 = `INSERT INTO comments (\`c_article_id\`, \`c_user_id\`, \`c_text_content\`) VALUES ('1', '1', '2e commentaire par admin')`;
db.query(insertComment2, err => {
    if (err) {
        throw err;
    }
    console.log("Insertion du commentaire #2");
});

let insertComment3 = `INSERT INTO comments (\`c_article_id\`, \`c_user_id\`, \`c_text_content\`) VALUES ('2', '2', '1er commentaire par user 2')`;
db.query(insertComment3, err => {
    if (err) {
        throw err;
    }
    console.log("Insertion du commentaire #3");
});

let insertComment4 = `INSERT INTO comments (\`c_article_id\`, \`c_user_id\`, \`c_text_content\`) VALUES ('2', '1', '3e commentaire par user admin')`;
db.query(insertComment4, err => {
    if (err) {
        throw err;
    }
    console.log("Insertion du commentaire #4");
});



let insertArticle2 = `INSERT INTO articles (\`a_user_id\`, \`a_text_content\`)
                    VALUES
                    ('1', "Deuxieme article ecrit par l'utilisateur admin")`;
db.query(insertArticle2, err => {
    if (err) {
        throw err;
    }
    console.log("Insertion de l'article #2");
});



let insertArticle3 = `INSERT INTO articles (\`a_user_id\`, \`a_text_content\`)
                    VALUES
                    ('2', "Troisieme article ecrit par l'utilisateur numero 2")`;
db.query(insertArticle3, err => {
    if (err) {
        throw err;
    }
    console.log("Insertion de l'article #3");
    process.exit();
});
