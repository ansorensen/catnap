var mongoose = require('mongoose'),
    <%= routeUppercase %> = require('<%= requireModelPath %>/<%= route %>.js'),
    <%= routeUppercase %>Controller = {};
    

<%= routeUppercase %>Controller.readAll = function(req, res) {
	<%= routeUppercase %>.find({}, function(err, doc) {
		if (err) {
			// pass on the error retrieving the collection
			res.status(500).json({err: err});
		}

		// return the collection
		res.status(200).json(doc);
	});
};

<%= routeUppercase %>Controller.create = function(req, res) {
    // assume the req body passes in all the pertinent info
    var <%= route %> = new <%= routeUppercase %>(req.body);
    
    <%= route %>.save(function (err) {
      if (err) {
        // pass on the error saving the object
        res.status(500).json({err: err});
      }
      <%= routeUppercase %>.findById(<%= route %>, function (err, doc) {
        if (err) {
          // pass on the error finding the recently saved object
          res.status(404).json({err: err});
        }
        // return the saved object, now with id
        res.status(200).json(doc);
      });
    });
};

<%= routeUppercase %>Controller.readOne = function(req, res) {
  <%= routeUppercase %>.findById(req.params.id, function (err, doc) {
    if (err) {
      // pass on the error finding the object
      res.status(404).json({err: err});
    }
    // return the saved object, now with id
    res.status(200).json(doc);
  });
};

<%= routeUppercase %>Controller.update = function(req, res) {
  <%= routeUppercase %>.findOneAndUpdate({_id: req.params.id}, req.body, function (err, doc) {
    if (err) {
      // pass on the error updating the object
      res.status(500).json({err: err});
    }
    // simply return the okay status
    res.status(200).json(doc);
  });
};

<%= routeUppercase %>Controller.delete = function(req, res) {
  <%= routeUppercase %>.remove({_id: req.params.id}, function (err, doc) {
    if (err) {
      // pass on the error removing the object
      res.status(500).json({err: err});
    }
    // simply return the okay status
    res.status(200).end();
  });
};
  
    
   
module.exports = <%= routeUppercase %>Controller;