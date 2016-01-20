var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var UserSchema = new Schema({
	firstName : String,
	lastName :  String,
	email  :    String,
	username:   String,
	password:   String,
	created_at: new Date()
});

mongoose.model('User',UserSchema);