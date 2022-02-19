// const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const { callWithErrorHandling } = require('vue');


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



exports.signup = (req, res, next) => {

    /*
        response : { message: string }

        Hachage du mot de passe
        de l'utilisateur, ajout de
        l'utilisateur à la base de
        données.
    */

    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            let finduser = `SELECT * FROM users WHERE email = \'${req.body.email}\'`;
            db.query(finduser, function(err, result, field) {
                if (result.length === 0) { // Si l'utilisateur n'existe pas, on le crer

                    let createUser = `INSERT INTO users (\`prenom\`, \`nom\`, \`email\`, \`password\`)
                                      VALUES
                                      ('${req.body.prenom}', '${req.body.nom}', '${req.body.email}', '${hash}')`;
                    db.query(createUser, err => {
                        if (err) {
                            throw err;
                        }
                        res.status(201).json({ message : "Utilisateur crer" });
                    })
                }
                else {
                    res.status(500).json({ error: "Adresse mail deja enregistree" });
                }
            });
        })
        .catch(error => { 
            res.status(500).json({ error });
        });
};

exports.login = (req, res, next) => {

    /*
        response : { userId: string, token: string }

        Vérification des
        informations d'identification
        de l'utilisateur,
        renvoie l _id de l'utilisateur
        depuis la base de données
        et un token web JSON signé
        (contenant également l'_id
        de l'utilisateur).
    */

    // Cherche l'utilisateur dans la bdd
    let finduser = `SELECT * FROM users WHERE email = \'${req.body.email}\'`;
    db.query(finduser, function(err, result, field) {
        if (err) {
            throw err;
        }

        if (result.length === 0) {
            console.log('user NOT FOUND');
            console.log(result);
            return res.status(401).json({error: 'USER NOT FOUND'});
        }
        
        else if (result.length === 1) {
            console.log('USER FOUND');
            console.log(req.body.password);
            console.log(result[0].password);

            bcrypt.compare(req.body.password, result[0].password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Incorrect password' });
                    }
                    res.status(200).json({
                        userId: result[0].id,
                        token: jwt.sign(
                            { userId: result[0].id },
                            'SecretTokenCode',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => { 
                    res.status(500).json({ error });
                });
        }
    });

    /*
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'User not found' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Incorrect password' });
                    }
                    res.status(200).json({
                        userId: user.id,
                        token: jwt.sign(
                            { userId: user.id },
                            'SecretTokenCode',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
    */
};