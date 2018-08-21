class AbstractLayer {
    /**
     *
     * @param numberOfNeurons
     */
    constructor(numberOfNeurons) {
        this.neurons = []
        this.numberOfNeurons = numberOfNeurons;
        this.initialize()
    }

    /**
     *
     * @param number
     * @returns {*}
     */
    getNeuron(number) {
        return this.neurons[number];
    }

    initialize() {

    }
}

module.exports = AbstractLayer