const path = require('path');

module.exports = {
    entry: "./js/App.jsx",
    output: {
    	path: path.join(__dirname, "./dist/"),
    	filename: "App.js"
        },
    watch: true,
    module: {
        loaders: [ {
                test: /\.jsx$/, exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['env', 'stage-2', 'react'] }
            }, {
                test: /\.css$/, exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000000
                }
            }
        ]
    }
}
