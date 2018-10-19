/*
Importer les composants du serveur
*/
    const express = require('express');
    const path = require('path');
    const frontRoute = require('./routes/front.route');
//

/*
Définir les variables serveur
*/
    const port = 3000;
    let todoServer = express();
//

/*
Conviguration du serveur
*/
    todoServer.use( express.static( path.join(__dirname, 'www') ) );
//

/*
Configurer les routes
*/
    todoServer.use( '/', frontRoute );
//

/*
Ecouter le serveur
*/
    todoServer.listen( port, () => {
        console.log(`Le serveur est lancé sur le port ${port}`);
    });
//