import db from './db/db';
import Password from './models/password';

export default callback => {
  callback(db);
}