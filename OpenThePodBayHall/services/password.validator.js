
const passwordValidator = require('password-validator')
// import * as passwordValidator from 'password-validator';


// Create a schema
const schema = new passwordValidator();

// Add properties to it
schema
    .is().min(10)                                    // Minimum length 10
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits()                                 // Must have digits
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values




const validatePassword = (password) => {
    return schema.validate(password, {list:true});
}


// export function validatePassword(password) {
//     return schema.validate(password, {list:true});
// }


/*
Export service fonctions
*/
module.exports = {
    validatePassword
};
//