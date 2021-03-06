/* eslint-disable no-console */
import * as webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import * as chalk from 'chalk';

console.log(chalk.blue('Generating minified bundle for production. This will take a moment...'));

webpack(webpackConfig).run((err, stats) => {
	if (err) { // so a fatal error occurred. Stop here.
		console.log(chalk.red(<any>err));
		return 1;
	}

	const jsonStats = stats.toJson();

	if(jsonStats.hasErrors) {
		return jsonStats.errors.map(error => console.log(chalk.red(error)));
	}

	if(jsonStats.hasWarnings) {
		console.log(chalk.yellow('Webpack generated the following warnings: '));
		jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
	}

	// if we got this far, the build succeeded.
	console.log(chalk.green('Your app has been built for production and written to /dist!'));

	return 0;
});
