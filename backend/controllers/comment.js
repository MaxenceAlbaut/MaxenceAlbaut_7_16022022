const db = require('../db');

exports.getAllComment = (req, res, next) => {

    /*
        response : [{articleId, userId, content, img_path}, {}, {}, ... ]

        Returns all articles in database.
    */


    let getComments = ` SELECT * FROM comments
                        JOIN users ON comments.c_user_id = users.u_id`;
    db.query(getComments, function(err, result, field) {
        if (err) {
            throw err;
        }
        res.status(200).json({ result });
    });
};

exports.postComment = (req, res, next) => {
    /*
        Insere un commentaire dans la bdd
    */

    let postQuery = `INSERT INTO comments (\`c_article_id\`, \`c_user_id\`, \`c_text_content\`)
    VALUES
    ('${req.body.article_id}', '${req.body.user_id}', "${req.body.text_content}")`;
    db.query(postQuery, function(err, result, field) {
        if (err) {
            throw err;
        }
        res.status(200).json({ message: "OK" });
    });
};

exports.deleteComment = (req, res, next) => {

    let deleteComments = `  DELETE FROM comments
                            WHERE c_id=${req.params.id}`;

    db.query(deleteComments, err => {
        if (err) {
            throw err;
        }
        res.status(200).json({ message : "Article supprime" });
    })
};