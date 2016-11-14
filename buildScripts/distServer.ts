import * as express from 'express';
import * as path from 'path';
import * as open from 'open';
import * as compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, (err) => {
	if(err) {
		console.log(err);
	} else {
		(open as any)('http://localhost:' + port);
	}
});
