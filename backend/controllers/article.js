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

    let getArticles = ` SELECT * FROM articles
                        JOIN users ON articles.a_user_id = users.u_id
                        ORDER BY a_id DESC`;
    db.query(getArticles, function(err, result, field) {
        if (err) {
            throw err;
        }
        res.status(200).json({ result });
    });
};

exports.getUserArticle = (req, res, next) => {
    let getUserArticles = ` SELECT * FROM articles
                            JOIN users ON articles.a_user_id = users.u_id
                            WHERE a_user_id=${req.params.userId}
                            ORDER BY a_id DESC`;
    db.query(getUserArticles, function(err, result, field) {
        if (err) {
            throw err;
        }
        res.status(200).json({ result });
    });
}

exports.postArticle = (req, res, next) => {
    let postQuery = `   INSERT INTO articles (\`a_user_id\`, \`a_text_content\`)
                        VALUES
                        ('${req.body.user_id}', "${req.body.text_content}")`;
    db.query(postQuery, err => {
        if (err) {
            throw err;
        }
        res.status(200).json({ message : "Article insere" });
    })
};

exports.deleteArticle = (req, res, next) => {
    console.log("id : "+req.params.id);

    let deleteComments = `  DELETE FROM comments
                            WHERE c_article_id=${req.params.id}`;

    let deleteArticle = `   DELETE FROM articles
                            WHERE a_id=${req.params.id}`
    db.query(deleteComments, err => {
        if (err) {
            throw err;
        }
        db.query(deleteArticle, err => {
            if (err) {
                throw err;
            }
            res.status(200).json({ message : "Article supprime" });
        })
    })
};

