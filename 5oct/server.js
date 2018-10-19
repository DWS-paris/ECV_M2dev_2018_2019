/*
Imports
*/
    // Node
    const express = require('express');
    const path = require('path');
    const bodyParser = require('body-parser');
    require('dotenv').config(); // Configurer les variables d'environement

    // Inner
    const frontRoute = require('./routes/front/front.route');
    const apiRoute = require('./routes/api/api.route')
//

/*
Définir les variables serveur
*/
    const port = process.env.PORT;
    let todoServer = express();
    todoServer.use( express.static( path.join(__dirname, 'www') ) );
    todoServer.use( bodyParser.urlencoded({ extended:true }) );
//

/*
Route definition
*/
    todoServer.use('/', frontRoute);
    todoServer.use('/api', apiRoute);
//

/*
Lancer le serveur
*/
    todoServer.listen( port, () => {
        console.log(`Le serveur est lancé sur le port ${port}`);
    });
//