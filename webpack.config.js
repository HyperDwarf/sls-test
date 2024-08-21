const path = require('path');
const nodeExternals = require('webpack-node-externals');
const slsw = require('serverless-webpack');

const isLocal = slsw.lib.webpack.isLocal;

module.exports = {
    mode: isLocal ? 'development' : 'production',
    entry: slsw.lib.entries,
    externals: [
        nodeExternals(),
        "@aws-sdk/client-dynamodb",
        "/mnt/efs/js/lib/node_modules/@tensorflow/tfjs-node"
    ],
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', ".mjs", '.json', '.ts', '.tsx']
    },
    output: {
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js'
    },
    target: 'node',
    cache: {
        type: 'filesystem',
        allowCollectingMemory: true,
        cacheDirectory: path.resolve('.webpackCache')
    },
    module: {
        rules: [
            {
                // Include ts, tsx, js, and jsx files.
                test: /\.(mjs|ts|js)x?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: []
};