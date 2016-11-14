/* 	This script generates mock data for local development.
	This way you don't have to point to an actual API,
	But you can enjoy realistic, but randomized data,
	and rapid page loads due to local, static data.
*/

/* eslint-disable no-console */

import * as jsf from 'json-schema-faker';
import { schema } from './mockDataSchema';
import * as fs from 'fs';
import * as chalk from 'chalk';

const json = JSON.stringify((jsf as any)(schema));

fs.writeFile('./source/api/db.json', json, (err) => {
	if (err) {
		return console.log(chalk.red(<any>err));
	} else {
		console.log(chalk.green('Mock data generated.'));
	}
});
