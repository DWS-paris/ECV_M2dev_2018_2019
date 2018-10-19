/*
Importer les composants et définir le router
*/
    const express = require('express');
    const router = express.Router();
//

/*
Configurer les routes
*/
    router.get( `/`, ( req, res ) => {
        // Envoyer le fichier index.html
        res.render('index.html');
    });
//

/*
Exporter le module de la route
*/
    module.exports = router;
//