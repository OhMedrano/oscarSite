var mongo = require('mongodb'),
	Server = mongo.Server,
	Db = mongo.Db,
	BSON = require('bson').BSONPure;

var server = new Server('localhost',27017,{auto_reconnection:true}),
	db = new Db('blogdb',server);

var blogCollection = db.collection('blogs');

db.open(function(err,db){
	if(!err){
		console.log('Connected to "blogdb database"');
		db.collection('blogs',{strict:true},function(err,collection){
			if(!collection){
				console.log("The 'blogs' collection doesn't exist. Creating it with simple data");
				populateDB();
			}
		});
	}
});

exports.findById = function(req,res){
	var id = req.params.id;

	console.log("Gettin' dat blog : "+id);

	db.collection('blogs',function(err,collection){
		if(err){
			throw err;
		} else {
			collection.findOne({'_id':new BSON.ObjectID(id)},function(err,item){
			res.send(item);
		})}
		;
	});
}

exports.findAll = function(req,res){
	db.collection('blogs',function(err,collection){
		collection.find().toArray(function(err,items){
			res.send(items);
		});
	});
};

exports.addBlog = function(req,res){
	var blog = req.body;
	console.log('Adding blog: '+JSON.stringify(blog));
	db.collection('blogs',function(err,collection){
		blogCollection.insert(blog,{safe:true},function(err,result){
			if(err){
				res.send({'error':'Error happened'});
			} else {
				console.log('Success: ' + JSON.stringify(result[0]));
				res.send(result[0]);
			}

		});
	});

};

exports.updateBlog = function(req,res){
	var id = req.params.id;
	var blog = req.body;
	console.log('Update blog: '+id);
	console.log(JSON.stringify(blog));
	db.collection('blogs',function(err,collection){
		collection.update({'_id':new BSON.ObjectID(id)},blog,{safe:true},function(err,result){
			if(err){
				console.log('Error updating blog :'+err);
				res.send({'error':'Error happened'});
			} else {
				console.log(''+result+' documents(s) updated');
				res.send(req.body);
			};
		});
	});
};

exports.deleteBlog = function(req,res){
	var id = req.params.id;
	console.log('Deleting blog: '+id);
	db.collection('blogs',function(err,collection){
		collection.remove({'_id':new BSON.ObjectID(id)},{safe:true},function(err,result){
			if(err){
				res.send({'error':'Error happened - '+ err});

			} else {
				console.log(''+result+' documents(s) deleted');
				res.send(req.body);
			}
		});
	});
};

var populateDB = function() {

    var blogs = [
    {
        name: "BLOG 1 ",
        date: new Date, 
        content: "BLAH BLAH BLABH BLAH BLAH BLAH BLAH BLAH"
    },
    {
        name: "BLOG 2",
        date: new Date, 
        content: "BLAH BLAH BLABH BLAH BLAH BLAH BLAH BLAH"
    }];

    db.collection('blogs', function(err, collection) {
        collection.insert(blogs, {safe:true}, function(err, result) {});
    });

};