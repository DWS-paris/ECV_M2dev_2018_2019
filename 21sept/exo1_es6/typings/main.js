/*
Les variable ES6
*/
    // let ES6 => var ES5
    let userName = "Paul";

    // La valeur d'une constante ne peut pas être modifiée
    const birthDate = 1979;

    const skills = [ "JS", "HTML", "CSS" ];
    const softSkills = [ "Social" ];

    // Utilisation du Spread Operator (...)
    const allSkills = [ ...skills, ...softSkills ];
//

/*
Templating ES6
*/
    console.log( `
        Hello ${ userName }, ton âge est ${ 2018 - birthDate } ans.
    ` )
//

/*
Les fonctions ES6
*/
    const twice = n => n * 2;

    // Rest parameter
    const displayUSerSkills = ( name, ...skill ) => {
        console.log(name)
        console.log(skill)
    };

    displayUSerSkills( `Julien`, `JS`, `CSS`, `HTML` );

    // Valeur par defaut d'un paramètre de fonction
    const helloUser = ( user = `Foo` ) => {
        console.log(`Hello ${user}`);
    };

    helloUser();
    helloUser(`Faa`);
//

/*
Async
*/
    let test = `Hello`;

    const asyncFunction = ( number = 0 ) => {

        return new Promise( (resolve, reject) => {

            if( number > 0 ){

                setTimeout(() => { 
                    test = `Ciao`;
                    resolve( test );
                    
                }, 1000);
                 
            } else{
                reject(test )
            }
    
        }); 
    };

    asyncFunction(10)
    .then( data => console.log(data) )
    .catch( error => console.error(error) );

    console.log(test)
//