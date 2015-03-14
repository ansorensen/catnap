var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    UserSchema;

UserSchema = new Schema({
    userName: {type: 'string', required: true},
    email:  { type: 'string', required: true },
    password: { type: 'string', required: true },
    userItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserItem' }]
});
                             
module.exports = mongoose.model('User', UserSchema);