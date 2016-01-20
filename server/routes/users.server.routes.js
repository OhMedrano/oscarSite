var users = require('../controller/users.server.controller');

module.exports = function(app) {
  app.route('./users').post(users.create);
};