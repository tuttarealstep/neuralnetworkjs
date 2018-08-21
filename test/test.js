const NeuralNetwork = require('../src/neuralnetwork');

let neuralNetwork = new NeuralNetwork(1, 3, 1)

function checkLogic(value1, result) {
    neuralNetwork.getInputLayer().getNeuron(0).setValue(value1)

    neuralNetwork.getHiddenLayer().activate();
    neuralNetwork.getOutputLayer().activate();

    if(neuralNetwork.getOutputLayer().getNeuron(0).value != result) {
        neuralNetwork.getOutputLayer().getNeuron(0).setDesiredValue(result)
        neuralNetwork.getOutputLayer().checkError();
        neuralNetwork.getHiddenLayer().checkError();
        neuralNetwork.getOutputLayer().changeWeight(0.6)
        neuralNetwork.getHiddenLayer().changeWeight(0.6)
    }
}

for(let i = 0; i < 50000; i++)
{
    checkLogic(0.0000, 0.5000)
    checkLogic(0.0625, 0.6531)
    checkLogic(0.1250, 0.7828)
    checkLogic(0.1875, 0.8696)
    checkLogic(0.2500, 0.9000)
    checkLogic(0.3125, 0.8696)
    checkLogic(0.3750, 0.7828)
    checkLogic(0.4375, 0.6531)
    checkLogic(0.5000, 0.5000)
    checkLogic(0.5625, 0.3469)
    checkLogic(0.6250, 0.2172)
    checkLogic(0.6875, 0.1304)
    checkLogic(0.7500, 0.1000)
    checkLogic(0.8125, 0.1304)
    checkLogic(0.8750, 0.2172)
    checkLogic(0.9375, 0.3469)
    checkLogic(1.0000, 0.5000)
}


checkLogic(1.0000, 0.5000)
console.log(neuralNetwork.getOutputLayer().getNeuron(0).value)