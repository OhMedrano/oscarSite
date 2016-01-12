/*var mongo = require('mongodb');

var Server = mongo.Server,
	Db = mongo.Db,
	BSON = mongo.BSONPure;

var server = new Server('localhost',27017,{auto_reconnection:true}),
	db = new Db('winedb',server);
var collection =db.get('winedb');
db.open(function(err,db){
	if(!err){
		console.log("Connected to 'winedb database'");
		db.collection('wines',{strict:true},function(err,collection){
			if(err){
				console.log("The 'wines' collection doesn't exist. Creating it with simple data...");
				populateDB();

			}
		});
	}
});

//Making a function to find the specific wine being called
exports.findById = function(req,res){
	//First make the variable to call that id. 
	// Here, we're binding(linking) that data 
	//  to the params.id that's being requested.
	//  so if it's like http:local/wine/wine1
	// 	it will be finding wine1. 
	var id = req.params.id;

	//Tells the console what id it's trying to find
	console.log('Retrieving wine: '+ id);

	//Next it will search the database called wines

	db.collection('wines',function(err,collection){
		// from there, it will that convert that var id
		//  to a binary object. Don't worry about it. 
		//   It will compare the objects in the database til 
		//    it finds it and sends the result back
		collection.findOne({'_id':new BSON.ObjectID(id)},function(err,item){
			res.send(item);
		});
	});
};

//Almost the same as above except this time
// it calls back all the items from that database
//  as an array. 

exports.findAll = function(req,res){
	db.collection('wines',function(err,collection){
		collection.find().toArray(function(err,items){
			res.send(items);
		});
	});
};

//This adds a new object into the database
exports.addWine = function(req,res){
	
	//This binds the data into a variable called
	//	wine. It has all the data. 
	// NOTE TO SELF: Figure out how to add more 
	//  properties on to this. 
	var wine = req.body;

	//This shows the start of the process and
	// which wine is being added
	console.log('Adding wine: ' + JSON.stringify(wine));
	
	//Now the function goes into the database

	db.collection('wines',function(err,collection){
		//Inside the database, it inserts the new data aka wine
		collection.insert(wine,{safe:true},function(err,result){
			//If it failed, it sends this error
			if(err){
				res.send({'error':'An error has occurred'});
			} 
			//If it passes, it sends this and shows the result in the console.
			else {
				console.log('Success: '+JSON.stringify(result[0]));
				res.send(result[0]);
			}
		});
	});
}

exports.addWine = function(req, res) {
    var wine = req.body;
    console.log('Adding wine: ' + JSON.stringify(wine));
    db.collection('wines', function(err, collection) {
        collection.insert(wine, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
}

//This updates the object
exports.updateWine = function(req,res){
	var id = req.params.id; //Bind the id
	var wine = req.body; 	// bind the data
	console.log('Updating wine: ' + id);
	console.log(JSON.stringify(wine));
	db.collection('wines',function(err,collection){
		
		//This one does a mix of the first 2, it finds the id, then updates the new info from the var wine
		collection.update({'_id':new BSON.ObjectID(id)},wine, {safe:true}, function(err,result){
			if(err){
				console.log('Error updating wine: '+ err);
				res.send({'error':'an error has occurred'});

			}

			else {
				console.log(''+result+' document(s) updated');
				res.send(req.body);
			};
		});
	});
}

// Same as above except it deletes. It's the reverse of the above code
exports.deleteWine = function(req,res){
	var id = req.params.id;
	console.log('Deleting wine: ' + id);
	db.collection('wines',function(err,collection){
		collection.remove({'_id':new BSON.ObjectID(id)},{safe:true},function(err,result){
			if(err){
				res.send({'error':'An error has occurred - '+err});

			}

			else {
				console.log(''+result+' document(s) deleted');
				res.send(req.body);
			}
		});
	});
}


//Fake data
var populateDB = function() {

    var wines = [
    {
        name: "CHATEAU DE SAINT COSME",
        year: "2009",
        grapes: "Grenache / Syrah",
        country: "France",
        region: "Southern Rhone",
        description: "The aromas of fruit and spice...",
        picture: "saint_cosme.jpg"
    },
    {
        name: "LAN RIOJA CRIANZA",
        year: "2006",
        grapes: "Tempranillo",
        country: "Spain",
        region: "Rioja",
        description: "A resurgence of interest in boutique vineyards...",
        picture: "lan_rioja.jpg"
    }];

    db.collection('wines', function(err, collection) {
        collection.insert(wines, {safe:true}, function(err, result) {});
    });

};*/


var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('winedb', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'winedb' database");
        db.collection('wines', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'wines' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});

exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving wine: ' + id);
    db.collection('wines', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};

exports.findAll = function(req, res) {
    db.collection('wines', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.addWine = function(req, res) {
    var wine = req.body;
    console.log('Adding wine: ' + JSON.stringify(wine));
    db.collection('wines', function(err, collection) {
        collection.insert(wine, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
}

exports.updateWine = function(req, res) {
    var id = req.params.id;
    var wine = req.body;
    console.log('Updating wine: ' + id);
    console.log(JSON.stringify(wine));
    db.collection('wines', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, wine, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating wine: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(wine);
            }
        });
    });
}

exports.deleteWine = function(req, res) {
    var id = req.params.id;
    console.log('Deleting wine: ' + id);
    db.collection('wines', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}

/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function() {

    var wines = [
    {
        name: "CHATEAU DE SAINT COSME",
        year: "2009",
        grapes: "Grenache / Syrah",
        country: "France",
        region: "Southern Rhone",
        description: "The aromas of fruit and spice...",
        picture: "saint_cosme.jpg"
    },
    {
        name: "LAN RIOJA CRIANZA",
        year: "2006",
        grapes: "Tempranillo",
        country: "Spain",
        region: "Rioja",
        description: "A resurgence of interest in boutique vineyards...",
        picture: "lan_rioja.jpg"
    }];

    db.collection('wines', function(err, collection) {
        collection.insert(wines, {safe:true}, function(err, result) {});
    });

};