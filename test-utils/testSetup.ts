// Jest does not allow us to use dotenv, mongoose, or app.listen() in tests -- However, on Jest initialization, it's fine.
// So, we must run initialization code (dotenv, mongoose, app.listen()) here.  Then, for Jest supertests, we can simply import run_server.ts :)
import path from 'path';

import { exec } from './utils';

export default async function () {
	// await exec('npm run build', { cwd: path.resolve(__dirname, '..') }); // Some tests require dist files to be built
	return true;
}

// https://mswjs.io/
