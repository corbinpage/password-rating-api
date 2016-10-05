import { version } from '../../package.json';
import { Router } from 'express';
import passwords from './passwords';

export default ({ config, db }) => {
	let api = Router();

	// mount the passwords resource
	api.use('/passwords', passwords({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
