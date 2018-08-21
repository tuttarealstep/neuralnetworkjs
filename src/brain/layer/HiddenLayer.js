const AbstractLayer = require("./AbstractLayer");
const HiddenNeuron = require("../neuron/HiddenNeuron");

class HiddenLayer extends AbstractLayer {
    initialize() {
        for (let i = 0; i < this.numberOfNeurons; i++) {
            this.neurons.push(new HiddenNeuron(0));
        }

        this.neurons.push(new HiddenNeuron(1)); //bias
    }

    activate() {
        for (let i = 0; i < this.numberOfNeurons; i++) {
            this.neurons[i].activate()
        }
    }

    /**
     *
     * @param {OutputLayer} outputLayer
     */
    setUp(outputLayer) {
        for (let i = 0; i < this.numberOfNeurons + 1; i++) {
            for (let j = 0; j < outputLayer.numberOfNeurons; j++) {
                if (i == this.numberOfNeurons) {
                    this.neurons[i].addOutputSynapse(outputLayer.getNeuron(j), 1)
                } else {
                    this.neurons[i].addOutputSynapse(outputLayer.getNeuron(j), Math.random() * (1 - (-1)) + (-1))
                }
            }
        }
    }

    checkError() {
        for (let i = 0; i < this.numberOfNeurons; i++) {
            this.neurons[i].checkError()
        }
    }

    /**
     *
     * @param epsilon
     */
    changeWeight(epsilon) {
        let _this = this;
        for (let i = 0; i < this.numberOfNeurons; i++) {
            for (let j = 0; j < this.neurons[i].inputSynapses.length - 1; j++) {
                this.neurons[i].inputSynapses[j].weight += epsilon * this.neurons[i].deltaValue * this.neurons[i].inputSynapses[j].neuron.value
                this.neurons[i].inputSynapses[j].neuron.outputSynapses.find(function (element) {
                    return element.id == _this.neurons[i].inputSynapses[j].id
                }).weight = this.neurons[i].inputSynapses[j].weight
            }

            this.neurons[i].inputSynapses[this.neurons[i].inputSynapses.length - 1].weight += epsilon * this.neurons[i].deltaValue;
            this.neurons[i].inputSynapses[this.neurons[i].inputSynapses.length - 1].neuron.outputSynapses.find(function (element) {
                return element.id == _this.neurons[i].inputSynapses[_this.neurons[i].inputSynapses.length - 1].id
            }).weight = this.neurons[i].inputSynapses[this.neurons[i].inputSynapses.length - 1].weight
        }
    }
}

module.exports = HiddenLayer