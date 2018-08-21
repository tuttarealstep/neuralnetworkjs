const path = require('path');

module.exports = {
    entry: './src/neuralnetwork.js',
    output: {
        library: 'NeuralNetwork',
        filename: 'neuralnetwork.js',
        path: path.resolve(__dirname, 'dist')
    }
};