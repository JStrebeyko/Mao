const path = require('path');

module.exports = {
    entry: "./js/mao.jsx",
    output: {
    	path: path.join(__dirname, "./js/"),
    	filename: "mao.js"
        },
    watch: true,
    module: {
        loaders: [ {
                test: /\.jsx$/, exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['env', 'stage-2', 'react'] }
            }
        ]
    }
}
