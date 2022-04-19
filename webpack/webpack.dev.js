const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = env => {
	console.log('ENV:', env);
	return {
		entry: {
			app: path.resolve(__dirname, '../src/index.js')
		},
		mode: 'development',
		devtool: 'eval-source-map',
		devServer: {
			contentBase: './assets'
		},
		resolve: {
			extensions: [ '.ts', '.tsx', '.js' ]
		},
		module: {
			rules: [
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader'],
				},
			],
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './index.html',
				favicon: './src/favicon.ico'
			}),
			new webpack.DefinePlugin({
				CONFIG: {
					DEVELOPMENT: JSON.stringify(true),
					PRODUCTION: JSON.stringify(false)
				}
			}),
		]
	};
}
