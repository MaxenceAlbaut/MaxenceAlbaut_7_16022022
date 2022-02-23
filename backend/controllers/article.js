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


exports.getAllArticle = (req, res, next) => {

    /*
        response : [{articleId, userId, content, img_path}, {}, {}, ... ]

        Returns all articles in database.
    */


    let getArticles = `SELECT * FROM articles`;
    db.query(getArticles, function(err, result, field) {
        if (err) {
            throw err;
        }
        res.status(200).json({ result });
    });
};

exports.getOneArticle = (req, res, next) => {

};

exports.postArticle = (req, res, next) => {
    let postQuery = `INSERT INTO articles (\`user_id\`, \`text_content\`, \`img_path\`)
    VALUES
    ('${req.body.user_id}', '${req.body.text_content}', '${req.body.img_path}')`;
    db.query(postQuery, err => {
        if (err) {
            throw err;
        }
        console.log("Article insere");
        res.status(200).json({ message : "OK" });
    })

};

exports.deleteArticle = (req, res, next) => {

};