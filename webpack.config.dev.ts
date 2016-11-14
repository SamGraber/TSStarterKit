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
		// Use CommonsChunkPlugin to create a separate bundle
		// of vendor libraries so that they're cached separately.
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
		}),

		// Create HTML file that includes reference to bundled JS.
		new HtmlWebpackPlugin({
			template: 'source/index.html',
			inject: true,
		}),
	],
});
