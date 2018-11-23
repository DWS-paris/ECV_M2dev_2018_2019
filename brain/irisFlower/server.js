/*
Import and configs
*/
    const Brain = require('brain.js');
    const NeuralNetwork = new Brain.NeuralNetwork({
        activation: 'sigmoid',
        hiddenLayers: [2],
        iterations: 40000
    });
//

/*
Set Data
*/
    const trainData = require('./data/train.json');
    const testData = require('./data/test.json');
    const trainingData = trainData.map( item =>( {
        input: item.input,
        output: item.output,
    }));

    const testingData = testData.map( item =>( {
        input: item.input,
        output: item.output,
    }));
//

/*
Train network
*/
    NeuralNetwork.train( trainingData, {
        log: true,
        logPeriod: 100,
        errorThresh: 0.001
    });
//

/*
Test network
*/
    testingData.forEach(item => {
        const testedFlower = NeuralNetwork.run(item.input);
        console.log(testedFlower);
    });
//