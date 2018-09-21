/*
Déclaration de variables
*/
    let userName: String = `Julien`;
    const birthDate: Number = 1979;
    const isMajor: Boolean = true;

    const skills: Array<String | Number | Boolean> = [ true, `HTML`, 12, `CSS` ];
//

/*
Fonctions TS
*/

    const userAge = ( name: String, birth: number ): String => {
        return `Name: ${name}, Age: ${ 2018 - birth }`
    };

//

/*
Typer un objet en TS
*/

    interface User {
        fullname: String;
        age: number;
        isMajor: Boolean
    };

    let newUser: User = {
        age: 39,
        fullname: `Julien Noyer`,
        isMajor: true
    }

//