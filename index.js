
const http = require("http");
const fs = require("fs");
const files_static = require("node-static");

let files = new files_static.Server("./public")

http.createServer(function(request, response) {

//	console.log(request.url);

//	let url = request.url.split("/");

	request.addListener('end', function(){
		files.serve(request, response);
	}).resume();
}).listen(8530);

