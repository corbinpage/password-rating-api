import db from './db';
import Password from '../models/password';

Password.sync({force: true});