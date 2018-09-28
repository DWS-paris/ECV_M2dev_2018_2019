/*
Déclaration de variables
*/
var userName = "Julien";
var birthDate = 1979;
var isMajor = true;
var skills = [true, "HTML", 12, "CSS"];
//
/*
Fonctions TS
*/
var userAge = function (name, birth) {
    return "Name: " + name + ", Age: " + (2018 - birth);
};
;
var newUser = {
    age: 39,
    fullname: "Julien Noyer",
    isMajor: true
};
var sayHello = function (user) {
    console.log(user.fullname);
};
sayHello(newUser);
//
