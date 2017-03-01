var nodeExternals = require('webpack-node-externals');
var path = require('path');
module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname,'build'),
		filename: 'bundle.js'
	},
	externals: [nodeExternals()],
	module: {
	loaders: [
		{test: /\.s?css$/, loader: 'style!css!sass'},
		{test: /\.js$/, loader:'babel-loader', exclude: /node_modules/}
	]
	}
}