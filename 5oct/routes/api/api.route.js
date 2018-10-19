/*
Imports
*/
    // Node
    const express = require('express');
    const router = express.Router();
    const fetch = require('node-fetch');

    // Inner
    const { checkFields } = require('../../services/request.checker');
    const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/server.response');
//

/*
Route definition
*/
    router.get('/', (req, res) => {
        res.json(`{ message: "Welcome" }`)
    })

    router.post('/todo', (req, res) => {
        
        // Vérifier la présence du body
        if( typeof req.body === 'undefined' || req.body === null ) sendBodyError( res, 'No body data provided' );

        // Vérifier les champs du body
        const { miss, extra, ok } = checkFields(['content', 'user'], req.body);
        
        // Vérifier la variable ok est true
        if( !ok ){ sendFieldsError( res, 'Bad fields provided', miss, extra ) }

        // Ajouter la todo dans la DB
        fetch( 'http://localhost:3000/todoes', {
            method: "POST",
            body: JSON.stringify( { "content": req.body.content, "user": req.body.user } )
        })
        .then( todo =>  sendApiSuccessResponse(res, 'Todo  created', todo) )
        .catch( error => sendApiErrorResponse(res, 'Todo not created', error) )
    })
//

/*
Export
*/
    module.exports = router;
//