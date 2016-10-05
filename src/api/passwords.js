import resource from 'resource-router-middleware';
import Password from '../models/password';

export default ({ config, db }) => resource({

  /** Property name to store preloaded entity on `request`. */
  id : 'password',

  /** For requests with an `id`, you can auto-load the entity.
   *  Errors terminate the request, success sets `req[id] = data`.
   */
   load(req, id, callback) {
    let password = Password.find( password => password.id===id ),
    err = password ? null : 'Not found';
    callback(err, password);
  },

  /** GET / - List all entities */
  index({ params }, res) {
    Password.findAll().then(function(passwords) {
      res.json(passwords);
    })
  },

  /** POST / - Create a new entity */
  // create({ body }, res) {
  //   body.id = Password.length.toString(36);
  //   Password.push(body);
  //   res.json(body);
  // },

  /** GET /:id - Return a given entity */
  read({ password }, res) {
    res.json(password);
  },

  /** PUT /:id - Update a given entity */
  update({ password, body }, res) {
    for (let key in body) {
      if (key!=='id') {
        password[key] = body[key];
      }
    }
    res.sendStatus(204);
  },

  /** DELETE /:id - Delete a given entity */
  // delete({ password }, res) {
  //   Password.splice(Password.indexOf(password), 1);
  //   res.sendStatus(204);
  // }
});
