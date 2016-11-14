import * as path from 'path';
import * as webpack from 'webpack';
import * as webpackMerge from 'webpack-merge';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import commonConfig from './webpack.common';

export default webpackMerge(commonConfig, {
	devtool: 'inline-source-map',
	output: {
		path: path.resolve(__dirname, 'source'),
		publicPath: '/',
		filename: '[name].js',
	},
	plugins: [
		// Create HTML file that includes reference to bundled JS.
		new HtmlWebpackPlugin({
			template: 'source/index.html',
			inject: true,
		}),
	],
});
