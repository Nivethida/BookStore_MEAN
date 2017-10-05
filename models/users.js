/**
 * Created by madhan on 8/20/17.
 */
/**
 * Created by madhan on 8/16/17.
 */
/**
 * Created by madhan on 8/16/17.
 */
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    conpassword: {
        type: String,
        required: true
    }
});
var User = module.exports = mongoose.model('User',userSchema);

//Add User
module.exports.addUser = function (user,callback) {
    User.create(user,callback);
}
