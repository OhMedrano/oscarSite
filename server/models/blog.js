var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
	title : String,
	createdat: new Date(),
	content: String
});

module.exports = mongoose.model('Blog',blogSchema);