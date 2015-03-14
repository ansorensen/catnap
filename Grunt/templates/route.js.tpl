var <%= routeUppercase %>Controller = require('<%= requireControllerPath %>/<%= route %>.js');


module.exports = function(app) {
  
  // general routes
  app.get('/api/<%= route %>', <%= routeUppercase %>Controller.readAll);
  app.post('/api/<%= route %>', <%= routeUppercase %>Controller.create);
  
  // single item routes
  app.get('/api/<%= route %>/:id', <%= routeUppercase %>Controller.readOne);
  app.put('/api/<%= route %>/:id', <%= routeUppercase %>Controller.update);
  app.delete('/api/<%= route %>/:id', <%= routeUppercase %>Controller.delete);
};