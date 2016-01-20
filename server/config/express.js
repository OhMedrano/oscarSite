var
	config = require('./config'),
	express = require('express'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	compress = require('compression'),
	methodOverride = require('method-override')
	
	
	;
module.exports = function() {
	var app = express();

	if(process.env.NODE_ENV === 'development'){
		app.use(morgan('dev'));
	} 
	
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());

	app.use(session({
    	saveUninitialized: true,
    	resave: true,
    	secret: config.sessionSecret
    
  }));

	app.set('views','./views');
	app.set('view engine','ejs');


  require('../routes/index.server.routes.js')(app);
  require('../routes/users.server.routes.js')(app);
	app.use(express.static('./public'));

	return app;
};