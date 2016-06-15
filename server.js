var http = require('http')

function onRequest(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Node World");
	response.end();
}

http.createServer(onRequest).listen(8888);

console.log("HTTP Server is started and ready to listen requests.");