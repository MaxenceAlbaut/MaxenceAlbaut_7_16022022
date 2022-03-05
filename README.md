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

Dans le fichier `/backend/database-init.js`

- Configurer le mot de passe pour l'utilisateur 'root' lors de la connection a mysql
- Configurer le mot de passe de la session admin a la fin du fichier

Dans les fichers `/backend/controllers/*`

- Configurer le mot de passe pour l'utilisateur 'root' lors de la connection a mysql


## Executer le projet

- Depuis '/backend/' lancer la commande : $ node database-init.js
- Depuis '/backend/' lancer la commande : $ node server.js
- Depuis '/' lancer la commande : $ npm run dev