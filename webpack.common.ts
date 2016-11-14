import * as path from 'path';
import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
	debug: true,
	devtool: 'inline-source-map',
	noInfo: false,
	entry: {
		polyfills: path.resolve(__dirname, 'source/polyfills.ts'),
		vendor: path.resolve(__dirname, 'source/vendor.ts'),
		main: path.resolve(__dirname, 'source/index.ts'),
	},
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'source'),
		publicPath: '/',
		filename: '[name].js',
	},
	resolve: {
		extensions: ['', '.ts', '.js'],
	},
	module: {
		loaders: [
			{test: /\.ts$/, exclude: /node_modules/, loaders: ['awesome-typescript-loader']},
			{test: /\.css$/, loaders: ['style', 'css']},
			{test: /\.html$/, loaders: ['html']},
		],
	},
};
