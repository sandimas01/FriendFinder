// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 3000
var PORT = process.env.PORT || 3000;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/index.html", function(err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

// Starts our server
app.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});

// var PORT = process.env.PORT || 3000;
// ...
// app.listen(PORT, function() {