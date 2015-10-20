var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end('<h1>CIS 395 Assignment 1</h1>');
});

var port = Number(process.env.PORT || 3000);

server.listen(port);
