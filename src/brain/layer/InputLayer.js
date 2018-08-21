const AbstractLayer = require("./AbstractLayer");
const InputNeuron = require("../neuron/InputNeuron");

class InputLayer extends AbstractLayer {

    initialize() {
        for (let i = 0; i < this.numberOfNeurons; i++) {
            this.neurons.push(new InputNeuron(0));
        }

        this.neurons.push(new InputNeuron(0)); //bias
    }

    /**
     *
     * @param {HiddenLayer} hiddenLayer
     */
    setUp(hiddenLayer) {
        for (let i = 0; i < this.numberOfNeurons + 1; i++) {
            for (let j = 0; j < hiddenLayer.numberOfNeurons; j++) {
                if (i == this.numberOfNeurons) {
                    this.neurons[this.numberOfNeurons].addOutputSynapse(hiddenLayer.getNeuron(j), 1)
                } else {
                    this.neurons[i].addOutputSynapse(hiddenLayer.getNeuron(j), Math.random() * (1 - (-1)) + (-1))
                }
            }
        }
    }
}

module.exports = InputLayer