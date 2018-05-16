var path = require('path');


module.exports = function(app) {

app.post('/api/friends', function(req, res) {
    // Capture the user input object
    var userInput = req.body;
    console.log(userInput);
    });
}
