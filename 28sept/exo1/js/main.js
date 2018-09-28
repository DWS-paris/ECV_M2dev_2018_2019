document.addEventListener('DOMContentLoaded', () => {
    /*
    Configuration PouchDB / CouchDB
    */
        // Définition de la base de données dans le navigateur
        const innerDB = new PouchDB('todo');

        // Définition de la base de données externe
        const remoteDB = 'https://ldp.dwsapp.io/my-todo';

        // Afficher les informations sur la base interne
        console.log( innerDB.info() );

        // Création d'une fonction de synchronisation PouchDB <=> CouchDB
        function syncDBS(){
            innerDB.replicate.to( remote, { live: true }, console.log('Nothing to SYNC') );
            innerDB.replicate.from( remote, { live: true }, console.log('Nothing to SYNC') );
        };
    //

    /*
    Interface utilisateur
    */
    //
});