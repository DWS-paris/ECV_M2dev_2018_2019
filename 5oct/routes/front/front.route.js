/*
Imports
*/
    const express = require('express');
    const router = express.Router();
//

/*
Route definition
*/
    router.get('/', (req, res) => res.render('index.html') );
//

/*
Export
*/
    module.exports = router;
//