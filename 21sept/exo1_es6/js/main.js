"use strict";

/*
Les variable ES6
*/
// let ES6 => var ES5
var userName = "Paul";

// La valeur d'une constante ne peut pas être modifiée
var birthDate = 1979;

var skills = ["JS", "HTML", "CSS"];
var softSkills = ["Social"];

// Utilisation du Spread Operator (...)
var allSkills = [].concat(skills, softSkills);
//

/*
Templating ES6
*/
console.log("\n        Hello " + userName + ", ton \xE2ge est " + (2018 - birthDate) + " ans.\n    ");
//

/*
Les fonctions ES6
*/
var twice = function twice(n) {
    return n * 2;
};

// Rest parameter
var displayUSerSkills = function displayUSerSkills(name) {
    for (var _len = arguments.length, skill = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        skill[_key - 1] = arguments[_key];
    }

    console.log(name);
    console.log(skill);
};

displayUSerSkills("Julien", "JS", "CSS", "HTML");

// Valeur par defaut d'un paramètre de fonction
var helloUser = function helloUser() {
    var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Foo";

    console.log("Hello " + user);
};

helloUser();
helloUser("Faa");
//

/*
Async
*/
var test = "Hello";

var asyncFunction = function asyncFunction() {
    var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;


    return new Promise(function (resolve, reject) {

        if (number > 0) {

            setTimeout(function () {
                test = "Ciao";
                resolve(test);
            }, 1000);
        } else {
            reject(test);
        }
    });
};

asyncFunction(10).then(function (data) {
    return console.log(data);
}).catch(function (error) {
    return console.error(error);
});

console.log(test);
//