var express = require('express'),
	wine = require('./routes/db'),
	blog = require('./routes/blogs'),
	/*Blog = require('./models/blog'),*/
	bodyParser = require('body-parser');

var app = express();


app.get('/blogs',blog.findAll);
app.get('/blogs/:id',blog.findById);
app.post('/blogs',blog.addBlog);
app.put('/blogs/:id',blog.updateBlog);
app.delete('/blogs/:id',blog.deleteBlog);






//NOTE TO SELF:
// ...Make a custom 3-dog console log showing
//  which port the app is broadcasting from
app.listen(3000);
console.log('3-DOG HERE! COMIN\' AT \'CHA AT GALAXY NEEEEWWS RADIO AT LOCALHOST 3000');