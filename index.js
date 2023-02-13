
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

function send_player(response) {
	fs.readFile("player.png", function(err, data) {

      if (err) {
         console.error(err);
         return;
      }

      response.writeHead(200, {"Content-Type":"image/png"});
      response.write(data);

      response.end();
   });
}

function send_enemy(response) {
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

function send_enemies(response) {
   
	let rand = $(( $RANDOM % 29 + 1  ))

	fs.readFile("enemy[rand].png", function(err, data) {

      if (err) {
         console.error(err);
         return;
      }

      response.writeHead(200, {"Content-Type":"image/png"});
      response.write(data);

      response.end();
   });
}

http.createServer(function(request, response) {

	console.log(request.url);

	let url = request.url.split("/");

	let name;
	let extension = ".png"

	switch (url[1] = name+extension) {
		case "player":
			send_player(response);			
			break;

		case "enemy":
			send_enemy(response);
			break;

		default:
			send_index(response);
	}

	fs.readFile("index.html", function(err, data) {
		
		if (err) {
			console.error(err);
			return;
		}

		response.writeHead(200, {"Content-Type":"text/html"});
		response.write(data);

		response.end();
	});

}).listen(8530);
