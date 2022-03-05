# Groupomania

Projet de reseau social d'entreprise

## Pre-requis

-  NodeJs (v16+) (https://nodejs.org/)
-  mysql-server

## Installation

    $ git clone https://github.com/MaxenceAlbaut/MaxenceAlbaut_7_16022022.git
    $ cd MaxenceAlbaut_7_16022022
    $ npm install
    $ cd backend
    $ npm install

## Configuration

Dans le ficher `/backend/db.js`

- Configurer le mot de passe pour l'utilisateur 'root' lors de la connection a mysql

Dans le fichier `/backend/database-init.js`

- Configurer le mot de passe de l'utilisateur admin a la fin du fichier

## Executer le projet

- Depuis '/backend/' lancer la commande : $ node database-init.js
- Depuis '/backend/' lancer la commande : $ node server.js
- Depuis '/' lancer la commande : $ npm run dev