var mongoose = require('mongoose'),
    User = require('../models/user.js'),
    UserController = {};
    

UserController.readAll = function(req, res) {
  // TODO: mongoose code
};

UserController.create = function(req, res) {
    // assume the req body passes in all the pertinent info
    var user = new User(req.body);
    
    user.save(function (err) {
      if (err) {
        // pass on the error saving the object
        res.status(500).json({err: err});
      }
      User.findById(user, function (err, doc) {
        if (err) {
          // pass on the error finding the recently saved object
          res.status(404).json({err: err});
        }
        // return the saved object, now with id
        res.status(200).json(doc);
      });
    });
};

UserController.readOne = function(req, res) {
  User.findById(req.params.id, function (err, doc) {
    if (err) {
      // pass on the error finding the object
      res.status(404).json({err: err});
    }
    // return the saved object, now with id
    res.status(200).json(doc);
  });
};

UserController.update = function(req, res) {
  User.findOneAndUpdate({_id: req.params.id}, req.body, function (err, doc) {
    if (err) {
      // pass on the error updating the object
      res.status(500).json({err: err});
    }
    // simply return the okay status
    res.status(200).json(doc);
  });
};

UserController.delete = function(req, res) {
  User.remove({_id: req.params.id}, function (err, doc) {
    if (err) {
      // pass on the error removing the object
      res.status(500).json({err: err});
    }
    // simply return the okay status
    res.status(200).end();
  });
};
  
    
   
module.exports = UserController;