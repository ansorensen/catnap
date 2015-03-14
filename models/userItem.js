var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    UserItemSchema;

UserItemSchema = new Schema({
    _owner : { type: 'string', ref: 'User' },
    name:  { type: 'string', required: true },
    desc: {type: 'string', required: false}
});
                             
module.exports = UserItemSchema;