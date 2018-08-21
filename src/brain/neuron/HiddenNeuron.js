const AbstractNeuron = require("./AbstractNeuron");

class HiddenNeuron extends AbstractNeuron {
    activate() {
        let weighedNumbers = this.inputSynapses.slice(0, this.inputSynapses.length - 1);
        weighedNumbers = weighedNumbers.map(function (edge) {
            return edge.neuron.value * edge.weight
        });

        this.innerActivation = this.inputSynapses[this.inputSynapses.length - 1].weight + weighedNumbers.reduce((a, b) => a + b, 0)

        this.setValue(1 / (1 + Math.exp(-this.innerActivation)))
    }

    checkError() {
        this.errorValue = 0

        for (let i = 0; i < this.outputSynapses.length; i++) {
            this.errorValue += this.outputSynapses[i].neuron.deltaValue * this.outputSynapses[i].weight;
        }

        this.deltaValue = this.errorValue * this.value * (1 - this.value)
    }
}

module.exports = HiddenNeuron