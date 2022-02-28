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

let insertArticle = `   INSERT INTO articles (\`a_user_id\`, \`a_text_content\`)
                        VALUES
                        ('1', "Premier article ecrit par l'utilisateur admin"),
                        ('1', "Deuxieme article ecrit par l'utilisateur admin"),
                        ('2', "Troisieme article ecrit par l'utilisateur numero 2")`;
db.query(insertArticle, err => {
    if (err) {
        throw err;
    }
    console.log("Insertion des articles...");
});

let insertComment = `   INSERT INTO comments (\`c_article_id\`, \`c_user_id\`, \`c_text_content\`)
                        VALUES
                            ('1', '1', '1er commentaire par admin'),
                            ('1', '1', '2e commentaire par admin'),
                            ('2', '2', '1er commentaire par user 2'),
                            ('2', '1', '3e commentaire par user admin')`;
db.query(insertComment, err => {
    if (err) {
        throw err;
    }
    console.log("Insertion des commentaires...");
    process.exit();
});

