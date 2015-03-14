var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    <%= routeUppercase %>Schema;

<%= routeUppercase %>Schema = new Schema({
});
                             
module.exports = mongoose.model('<%= routeUppercase %>', <%= routeUppercase %>Schema);