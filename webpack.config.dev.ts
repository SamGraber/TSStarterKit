import * as path from 'path';
import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
	debug: true,
	devtool: 'inline-source-map',
	noInfo: false,
	entry: {
		vendor: path.resolve(__dirname, 'source/vendor.ts'),
		main: path.resolve(__dirname, 'source/index.ts'),
	},
	target: 'web',
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
	module: {
		loaders: [
			{test: /\.ts$/, exclude: /node_modules/, loaders: ['awesome-typescript-loader']},
			{test: /\.css$/, loaders: ['style', 'css']},
		],
	},
};
