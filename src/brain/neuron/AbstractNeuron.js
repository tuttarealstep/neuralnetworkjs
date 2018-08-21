const Synapse = require("../Synapse");

class AbstractNeuron {
    /**
     *
     * @param value
     */
    constructor(value) {
        this.value = value
        this.inputSynapses = []
        this.outputSynapses = []
        this.innerActivation = 0
        this.errorValue = 0
        this.desiredValue = 0
        this.deltaValue = 0
    }

    /**
     *
     * @param value
     */
    setValue(value) {
        this.value = value;
    }

    /**
     *
     * @param inputSynapses
     */
    setInputSynapses(inputSynapses) {
        this.inputSynapses = inputSynapses;
    }

    /**
     *
     * @param outputSynapses
     */
    setOutputSynapses(outputSynapses) {
        this.outputSynapses = outputSynapses;
    }

    /**
     * @param neuron
     * @param weight
     */
    addOutputSynapse(neuron, weight) {
        let id = this.outputSynapses.length
        this.outputSynapses.push(new Synapse(id, neuron, weight))
        neuron.addInputSynapse(id, this, weight)
    }

    /**
     *
     * @param neuron
     * @param weight
     */
    addInputSynapse(id, neuron, weight) {
        this.inputSynapses.push(new Synapse(id, neuron, weight))
    }
}

module.exports = AbstractNeuron