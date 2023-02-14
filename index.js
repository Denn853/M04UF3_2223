
const http = require("http");
const fs = require("fs");

function send_index(response) {
	fs.readFile("index.html", function(err, data) {

      if (err) {
         console.error(err);
         return;
      }

      response.writeHead(200, {"Content-Type":"text/html"});
      response.write(data);

      response.end();
   });
}

function send_player(response, image) {
	fs.readFile("imgs/" + image, function(err, data) {

      if (err) {
         console.error(err);
         return;
      }

      response.writeHead(200, {"Content-Type":"image/png"});
      response.write(data);

      response.end();
   });
}

/*function send_enemy(response) {
   fs.readFile("enemy.png", function(err, data) {

      if (err) {
         console.error(err);
         return;
      }

      response.writeHead(200, {"Content-Type":"image/png"});
      response.write(data);

      response.end();
   });
}

function send_enemies(response, image) {
   
	let rand = $(( $RANDOM % 29 + 1  ))
	
	image = "enemy$(( $RANDOM % 29 + 1 )).png"

	fs.readFile("imgs/" + image, function(err, data) {

      if (err) {
         console.error(err);
         return;
      }

      response.writeHead(200, {"Content-Type":"image/png"});
      response.write(data);

      response.end();
   });
}*/


http.createServer(function(request, response) {

	console.log(request.url);

	let url = request.url.split("/");

/*	switch (url[1].match("png")) {
		case "player":
			send_player(response);			
			break;

		case "enemy":
			send_enemy(response);
			break;

		default:
			send_index(response);
*/

	if (url[1].match("png")) {
		send_player(response, url[1]);
		return;
	}
	
	fs.readFile("index.html", function(err, data) {

	      if (err) {
      	   console.error(err);
        		return;
   	   }
	
	      response.writeHead(200, {"Content-Type":"text/html"});
      	response.write(data);

   	   response.end();
	})

}).listen(8530);

