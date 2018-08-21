class Synapse {
    /**
     *
     * @param id
     * @param neuron
     * @param weight
     */
    constructor(id, neuron, weight)
    {
        this.id = id
        this.neuron = neuron;
        this.weight = weight;
    }
}

module.exports = Synapse