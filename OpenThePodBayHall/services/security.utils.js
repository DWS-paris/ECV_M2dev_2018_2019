/*
Imports
*/
    const util = require('util');
    const crypto = require('crypto');
    const jwt = require('jsonwebtoken');
    const fs = require('fs');
//

/* 
Variables
*/
    const randomBytes = util.promisify(crypto.randomBytes);
    const signJwt = util.promisify(jwt.sign);
    const RSA_PRIVATE_KEY = fs.readFileSync('./ssh/private.key');
    const RSA_PUBLIC_KEY = fs.readFileSync('./ssh/public.key');
// 

/*
Service definition
*/
    const createSessionToken = async user => {
        const payload = await signJwt({
                roles: user.roles
            },
            RSA_PRIVATE_KEY, {
            algorithm: 'RS256',
            expiresIn: 7200,
            subject: user.id.toString()
        });

        return payload;
    }

    const decodeJwt = async () => {
        const payload = await jwt.verify(token, RSA_PUBLIC_KEY);
        console.log("decoded JWT payload", payload);
        return payload;
    }

    const createCsrfToken = async () => {
        return await randomBytes(32).then(bytes => bytes.toString("hex"));
    }
// 


/*
Export service fonctions
*/
    module.exports = {
        createSessionToken,
        decodeJwt,
        createCsrfToken
    };
//