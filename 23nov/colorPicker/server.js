/* 
Import
*/
    const Brain = require('brain.js');
    const NeuralNetwork = new Brain.NeuralNetwork();
//

/* 
Train Network
*/
    const config = {
        iterations: Infinity,
        log: true,
        logPeriod: 10000,
        errorThresh: 0.00001
    };

    // Définir un tableau de couleur
    const colorCollection = [
        { input: { r: 0.62, g: 0.72, b: 0.88 }, output: { light: 1 } },
        { input: { r: 0.10, g: 0.84, b: 0.72 }, output: { light: 1 } },
        { input: { r: 0.74, g: 0.78, b: 0.86 }, output: { light: 1 } },
        { input: { r: 0.33, g: 0.24, b: 0.29 }, output: { dark: 1 } },
        { input: { r: 0.31, g: 0.35, b: 0.41 }, output: { dark: 1 } }
    ];

    // Lancer l'entrainement
    NeuralNetwork.train( colorCollection, config );
//

/* 
Tester le réseau
*/
    const testLight = { r: 0.74, g: 0.78, b: 0.86 };
    const testDark = { r: 0.31, g: 0.35, b: 0.41 };

    const lightResult = NeuralNetwork.run(testLight);
    const darkResult = NeuralNetwork.run(testDark);

    console.log('lightResult', lightResult);
    console.log('darkResult', darkResult);
//