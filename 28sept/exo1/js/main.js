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

        // Capter les changements sur la base de données interne
        innerDB.changes({
            since: 'now',
            live: true
        }).on( 'change', getAllDocs );

        // Création d'une fonction de synchronisation PouchDB <=> CouchDB
        function syncDBS(){
            innerDB.replicate.to( remoteDB, { live: true }, console.log('Nothing to SYNC') );
            innerDB.replicate.from( remoteDB, { live: true }, console.log('Nothing to SYNC') );
        };

        // Synchroniser les bases de données
        remoteDB ? syncDBS() : null;
    //

    /*
    Interface utilisateur
    */
        // Fonction pour charger les documents depuis la base de données interne
        function getAllDocs(){
            innerDB.allDocs({ include_docs: true, descending: true })
            .then( pouchData => {
                console.log(pouchData);
            })
            .catch( pouchData => {
                console.error(pouchData);
            });
        };

        // Définition d'un objet Todo'
        function Todo(_id, content, isDone){
            this._id = _id;
            this.content = content;
            this.isDone = isDone;
        }
        // Gestion du formulaire
        const todoForm = document.querySelector('form');
        todoForm.addEventListener('submit', event => {
            event.preventDefault();
            todoForm.elements[0].value.length >= 1 ? addNewItem(todoForm.elements[0].value) : null;
        });

        // Créer une fonction pour ajouter un item
        const addNewItem = data => {
            innerDB.put({
                _id: new Date().toISOString(),
                content: data,
                isDone: false
            })
            .then( () => { todoForm.elements[0].value = '' })
            .catch( data => { console.error(data) });
        };
    //

    /*
    Lancer l'application
    */
        getAllDocs();
    //
});