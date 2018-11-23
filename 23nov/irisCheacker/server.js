/*
Import and configs
*/
    const Brain = require('brain.js');
    const NeuralNetwork = new Brain.NeuralNetwork({
        activation: 'sigmoid',
        // hiddenLayers: [2],
        // iterations: Infinity
    });
//

/* 
Set data
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
        logPeriod: 1000,
        errorThresh: 0.001
    });
// 

/*
Test network
*/
    // testingData.forEach(item => {
    //     const testedFlower = NeuralNetwork.run(item.input);
    //     console.log(testedFlower);
    // });
//

const testedFlower = NeuralNetwork.run([6.7,3.1,5.6,2.4]);
console.log(testedFlower)