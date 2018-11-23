/*
Import & config
*/
    const Brain = require('brain.js');
    const NeuralNetwork = new Brain.NeuralNetwork();
//

/*
Train network
*/
    const config = {
        iterations: Infinity,
        log: true,
        logPeriod: 1000,
        errorThresh: 0.000001
    };

    NeuralNetwork.train([
        { input: { r: 0.62, g: 0.72, b: 0.88 }, output: { light: 1 } },
        { input: { r: 0.10, g: 0.84, b: 0.72 }, output: { light: 1 } },
        { input: { r: 0.74, g: 0.78, b: 0.86 }, output: { light: 1 } },
        { input: { r: 0.33, g: 0.24, b: 0.29 }, output: { dark: 1 } },
        { input: { r: 0.31, g: 0.35, b: 0.41 }, output: { dark: 1 } }
    ], config);
//



/*w
Test
*/
    const firstTest = NeuralNetwork.run({ r: 0.74, g: 0.78, b: 0.86 });
    const secondTest = NeuralNetwork.run({ r: 0.33, g: 0.24, b: 0.29 });
    console.log('firstTest', firstTest);
    console.log('secondTest', secondTest);
//