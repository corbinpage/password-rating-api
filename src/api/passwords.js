import resource from 'resource-router-middleware';

export default ({ config, db }) => resource({

  /** Property name to store preloaded entity on `request`. */
  id : 'password',

  /** For requests with an `id`, you can auto-load the entity.
   *  Errors terminate the request, success sets `req[id] = data`.
   */
   load(req, id, callback) {
    db.models.password.find( { where: {text: id} } ).then(password => {
      let err = password ? null : 'Not found';
      callback(err, password);      
    })
  },

  /** GET / - List all entities */
  index({ params }, res) {
    db.models.password.findAll().then(function(passwords) {
      console.log(passwords);
      res.json(passwords);
    })
  },

  /** POST / - Create a new entity */
  // create({ body }, res) {
  //   body.id = db.models.password.length.toString(36);
  //   db.models.password.push(body);
  //   res.json(body);
  // },

  /** GET /:id - Return a given entity */
  read({ password }, res) {
    console.log(password);
    res.json(password)
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
  //   db.models.password.splice(db.models.password.indexOf(password), 1);
  //   res.sendStatus(204);
  // }
});
