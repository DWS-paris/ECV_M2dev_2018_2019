// Attendre le DOM
document.addEventListener('DOMContentLoaded', () => {

    /*
    Configuration PouchDB / CouchDB
    */
        // Définition de la base de données dans le navigateur
        const innerDB = new PouchDB('user');

        // Afficher les informations sur la base interne
        console.log( innerDB.info() );

        // Capter les changement sur la base de données interne
        innerDB.changes({
            since: 'now',
            live: true
        }).on( 'change', getAllDocs );

        // Définition de la base de données externe
        const remoteDB = 'https://ldp.dwsapp.io/my-todo';

        // Création du fonction de synchronisation PouchDB <=> CouchDB
        function syncDBS(){
            innerDB.replicate.to( remoteDB, { live: true }, console.log('Nothing to SYNC') );
            innerDB.replicate.from( remoteDB, { live: true }, console.log('Nothing to SYNC') );
        };

        // Synchroniser les bases de données si la base de données externe est présente
        remoteDB ? syncDBS() : null;
    //


    /*
    Interface utilisateur
    */
        // Définition des variables
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

        
        
        // Créer une fonction pour récupérer les items de la base de données du navigateur
        function getAllDocs() {
            innerDB.allDocs({ include_docs: true, descending: true })
            .then( data => {
                let todoArray = [];
                const rawData = data.rows;

                // Définition de la collections d'objets à afficher dasn le DOM
                rawData.forEach( item => {
                    todoArray.push( new Todo( item.id, item.doc.content, item.doc.isDone ) )
                })

                // Afficher la liste des items
                displayTodoes(todoArray)
            })
            .catch( data => { console.error(data) });
        };
        // Charger les items
        getAllDocs();



        // Fonction pour éditer un item
        const checkboxChanged = (todo, event) => {
            // Selectionner l'item à modifier
            innerDB.get(todo._id).then( doc => {

                // Modifier l'item
                return innerDB.put({
                    _id: todo._id,
                    _rev: doc._rev,
                    content: todo.content,
                    isDone:  !todo.isDone
                });

            })
            .then( response  => { console.log(response) })
            .catch( response =>  { console.error(response) });
        }

        // Fonction pour supprimer un item
        function deleteItem(todo) {
            // Selectionner l'item à supprimer
            innerDB.get(todo._id).then( doc => {
                // Supprimer l'item
                return innerDB.remove(doc._id, doc._rev);
            })
            .then( response  => { console.log(response) })
            .catch( response =>  { console.error(response) });
        }


        // Créer une fonction pour afficher les todoes dans le DOM
        const displayTodoes = (todoArray) => {

            // Sélection et vidage de la liste
            let todoList = document.querySelector('ul');
            todoList.innerHTML = ''

            // Bouckee sur le tableau de données
            todoArray.forEach( todo => {
                // Ajout du content
                let todoLi = document.createElement('li');
                todoLi.innerHTML = `<p>${todo.content}</p>`;

                let todoAction = document.createElement('div');

                // Création de l'icone pour éditer un item
                let editTag = document.createElement('i');
                todo.isDone ? editTag.className = 'fas fa-check-circle' : editTag.className = 'far fa-check-circle'
                editTag.addEventListener('click', checkboxChanged.bind(this, todo));

                // Création de l'icone pour supprimer un item
                let deleteTag = document.createElement('i');
                deleteTag.className = 'fas fa-trash-alt';
                deleteTag.addEventListener('click', deleteItem.bind(this, todo))

                // Ajout des balises dans le DOM
                todoAction.appendChild(editTag)
                todoAction.appendChild(deleteTag)
                todoLi.appendChild(todoAction)
                todoList.appendChild(todoLi)
            })
        };
    //
});