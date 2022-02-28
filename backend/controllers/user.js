// const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const fs = require('fs');


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

    var imgPath = './images/';

    function getNewestFile(files, path) {
        var out = [];
        files.forEach(function(file) {
            var stats = fs.statSync(path + "/" +file);
            if(stats.isFile()) {
                out.push({"file":file, "mtime": stats.mtime.getTime()});
            }
        });
        out.sort(function(a,b) {
            return b.mtime - a.mtime;
        })
        return (out.length>0) ? out[0].file : "";
    }


    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            let finduser = `SELECT * FROM users WHERE email = \'${req.body.email}\'`;
            db.query(finduser, function(err, result, field) {
                if (result.length === 0) { // Si l'utilisateur n'existe pas, on le crer
                    fs.readdir(imgPath, function(err, files) { // Recuperation du dernier fichier image enregistre
                        if (err) {
                            throw err;
                        }
                        var file = getNewestFile(files, imgPath);
                        
                        let createUser = `INSERT INTO users (\`prenom\`, \`nom\`, \`email\`, \`password\`, \`u_img_path\`)
                                      VALUES
                                      ('${req.body.prenom}', '${req.body.nom}', '${req.body.email}', '${hash}', '${imgPath+file}')`;
                        db.query(createUser, err => {
                            if (err) {
                                throw err;
                            }
                            res.status(201).json({ message : "Utilisateur cree" });
                        })
                    });
                }
                else { res.status(500).json({ error: "Adresse mail deja enregistree" }); }
            });
        })
        .catch(error => { res.status(500).json({ error }); });
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

        if (result.length == 0) {
            return res.status(401).json({message: 'User not found'});
        }
        
        else if (result.length == 1) {
            bcrypt.compare(req.body.password, result[0].password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'Incorrect password' });
                    }
                    res.status(200).json({
                        userId: result[0].u_id,
                        token: jwt.sign(
                            { userId: result[0].u_id },
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
};

exports.getUser = (req, res, next) => {

    /*
        response : { prenom: string, nom: string }

        Retourne les informations d'un utilisateur.
    */

    console.log(req.params.id);
    let uId = req.params.id;
    let getUserQuery = `SELECT * FROM users WHERE u_id = ${uId}`;
    db.query(getUserQuery, function(err, result, field) {
        if (err) {
            throw err;
        }
        if (result.length === 1) {
            let response = {
                prenom: `${result[0].prenom}`,
                nom: `${result[0].nom}`,
                img: `${result[0].u_img_path}`
            }
            res.status(200).json({ response });
        }
        else {
            res.status(404).json({ error: "Erreur lors de la requete" });
        }
    })


}