const InputLayer = require("./brain/layer/InputLayer");
const HiddenLayer = require("./brain/layer/HiddenLayer");
const OutputLayer = require("./brain/layer/OutputLayer");

class NeuralNetwork {
    /**
     *
     * @param {number} nInputNeurons
     * @param {number} nHiddenNeurons
     * @param {number} nOutputNeurons
     */
    constructor(nInputNeurons, nHiddenNeurons, nOutputNeurons) {
        this._nInputNeurons = nInputNeurons;
        this._nHiddenNeurons = nHiddenNeurons;
        this._nOutputNeurons = nOutputNeurons;

        this.setUp(this._nInputNeurons, this._nHiddenNeurons, this._nOutputNeurons)
    }

    /**
     *
     * @param nInputNeurons
     * @param nHiddenNeurons
     * @param nOutputNeurons
     */
    setUp(nInputNeurons, nHiddenNeurons, nOutputNeurons) {
        this.inputLayer = new InputLayer(nInputNeurons);
        this.hiddenLayer = new HiddenLayer(nHiddenNeurons);
        this.outputLayer = new OutputLayer(nOutputNeurons);

        this.inputLayer.setUp(this.hiddenLayer);
        this.hiddenLayer.setUp(this.outputLayer);
    }

    /**
     *
     * @returns {InputLayer}
     */
    getInputLayer() {
        return this.inputLayer;
    }

    /**
     *
     * @returns {HiddenLayer}
     */
    getHiddenLayer() {
        return this.hiddenLayer;
    }

    /**
     *
     * @returns {OutputLayer}
     */
    getOutputLayer() {
        return this.outputLayer;
    }

}

module.exports = NeuralNetwork