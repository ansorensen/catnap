    // app dependencies
var encrypt = require('../utils/encrypt.js'),
    UserController = require('../controllers/user.js');

module.exports = function(app) {
  
  // general routes
  app.get('/api/user', UserController.readAll);
  app.post('/api/user', [encrypt.hashPassword, UserController.create]);
  
  // single item routes
  app.get('/api/user/:id', UserController.readOne);
  app.put('/api/user/:id', UserController.update);
  app.delete('/api/user/:id', UserController.delete);
};