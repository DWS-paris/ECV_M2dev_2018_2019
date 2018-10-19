/*
Importer les composants et définir le router
*/
    const express = require('express');
    const router = express.Router();
//

/*
Configurer les routes
*/
    router.get( '/', ( req, res ) => {
        res.render('index.html');
    });
//

/*
Exporter le module de route
*/
    module.exports = router;
//