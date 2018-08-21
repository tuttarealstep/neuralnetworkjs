const AbstractLayer = require("./AbstractLayer");
const OutputNeuron = require("../neuron/OutputNeuron");

class OutputLayer extends AbstractLayer {
    initialize() {
        for (let i = 0; i < this.numberOfNeurons; i++) {
            this.neurons.push(new OutputNeuron(0));
        }
    }

    activate() {
        for (let i = 0; i < this.numberOfNeurons; i++) {
            this.neurons[i].activate()
        }
    }

    checkError() {
        for (let i = 0; i < this.numberOfNeurons; i++) {
            this.neurons[i].checkError()
        }
    }

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

module.exports = OutputLayer