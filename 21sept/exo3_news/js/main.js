/*
Variables
*/
    const newsApiKey = '558b63db8d7d46e8934c954fbd98bd3f';
    const mainSection = document.querySelector('main');
    const sourceSelector = document.querySelector('select');
    const defaultSource = 'liberation';
//

/*
Functions
*/
    const getAllSources = async () => {
        // Configuration de la requête asynchrone
        const apiResult = await fetch(`https://newsapi.org/v2/sources?apiKey=${newsApiKey}`);
        const jsonResult = await apiResult.json();

         // Boucle sur la collection de données ('\n' permet d'optimiser l'affichage dans le DOM)
        sourceSelector.innerHTML = jsonResult.sources.map(displaySources).join('\n');
    }

    // Function pour récupérer la liste de news depuis l'api
    const getAllNews = async (source = defaultSource) => {
        // Configuration de la requête asynchrone
        const apiResult = await fetch(`https://newsapi.org/v2/everything?sources=${source}&language=fr&apiKey=${newsApiKey}`);
        const jsonResult = await apiResult.json();
        const articleArray = jsonResult.articles;

        // Vérifier la liste de news
        if (articleArray.length > 0) {
            // Boucle sur la collection de données ('\n' permet d'optimiser l'affichage dans le DOM)
            mainSection.innerHTML = jsonResult.articles.map(displayNews).join('\n');

        } else {
            mainSection.innerHTML =`
                <article>
                    <figure>
                        <figcaption><h2>No Post</h2></figcaption>
                        <img src="./img/ui/no-image.png" alt="Image Jurrasic Error">
                    </figure>
                    <p>Please try another category</p>
                </article>
            `;
        };
    };

    // Fonction pour ajouter les sources dans le DOM
    const displaySources = (singleSource) => {
        return `
            <option value="${singleSource.id}">${singleSource.name}</option>
        `;
    };

    // Fonction pour ajouter les news dans le DOM
    const displayNews = (singleNews) => {
        if(singleNews.title){
            return `
                <article>
                    <figure>
                        <figcaption><h2>${singleNews.title}</h2></figcaption>
                        <img src="${singleNews.urlToImage || `./img/ui/no-image.png`}" alt="Image de l'article de : ${singleNews.source.name}">
                    </figure>
                    <p>${singleNews.description}</p>
                    <a href="${singleNews.url}" target="_blank" class="cta" rel="noreferrer">Lire la suite</a>
                </article>
            `;

        } else{
            return `
                <article>
                    <figure>
                        <img src="./img/ui/jurrasic-error.png" alt="Image Jurrasic Error">
                    </figure>
                    <p>You are not connected on the web...</p>
                </article>
            `;
        }
    };
//
/*
Lancer l'application une fois la page chargée
*/
window.addEventListener('load', async () => {
    await getAllSources();

    // Définir la source par defaut dans le selecteur
    sourceSelector.value = defaultSource;
    await getAllNews();

    // Capter le changement de source
    sourceSelector.addEventListener('change', event => {
        getAllNews(event.target.value);
    });

    // Instancier le service worker
    if( 'serviceWorker' in navigator ){
        try {
            navigator.serviceWorker.register('service-worker.js');
            console.log('Service Registered');
            
        } catch (error) {
            console.log('Service Registation failed...');
        };
    };

})
