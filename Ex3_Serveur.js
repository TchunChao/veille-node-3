const http = require("http"); 

http.createServer(function(request, response) 
{
	let html = "<table>";
	const fs = require("fs");
	response.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
	let data = fs.readFileSync('Ex3_provinces.JSON');
	let obj = JSON.parse(data);
	for (var p in obj) {
		html += "<tr><td>" + p + "</td><td>" + obj[p] + "</td></tr>";
	}
	html += "</table>"
	response.write(html);
	response.end();
}).listen(3000);