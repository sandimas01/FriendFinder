var path = require('path');

var friends = require('../data/friends.js');


module.exports = function(app) {

    	// Total list of friend entries
	app.get('/api/friends', function(req, res) {
        res.json(friends);
        console.log(friends)
	});

app.post('/api/friends', function(req, res) {
    // Capture the user input object
    var userInput = req.body;
    console.log(userInput);

    // Add new user
    friends.push(userInput);

    });

}
