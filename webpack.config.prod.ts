import * as path from 'path';
import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as WebpackMd5Hash from 'webpack-md5-hash';

export default {
	debug: true,
	devtool: 'source-map',
	noInfo: false,
	entry: {
		vendor: path.resolve(__dirname, 'source/vendor.ts'),
		main: path.resolve(__dirname, 'source/index.ts'),
	},
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].[chunkhash].js',
	},
	plugins: [
		// Hash the files using MD5 so that their names change when the content changes.
		new (WebpackMd5Hash as any)(),

		// Use CommonsChunkPlugin to create a separate bundle
		// of vendor libraries so that they're cached separately.
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
		}),

		// Create HTML file that includes reference to bundled JS.
		new HtmlWebpackPlugin(<any>{
			template: 'source/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeSylteLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true,
			},
			inject: true,
			production: true,
		}),

		// Eliminate duplicate packages when generating bundle
		new webpack.optimize.DedupePlugin(),

		// Minify JS
		new webpack.optimize.UglifyJsPlugin(),
	],
	module: {
		loaders: [
			{test: /\.ts$/, exclude: /node_modules/, loaders: ['awesome-typescript-loader']},
			{test: /\.css$/, loaders: ['style', 'css']},
		],
	},
};
