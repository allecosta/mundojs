let http = require("http");
let fs = require("fs");

let server = http.createServer(function (request, response) {
    fs.readFile(__dirname + '/index.html', function (err, html) {
        response.writeHead(200, { "content=type": "text/html" });
        response.write(html);
        response.end();
    });
});

server.listen(3000, function () {
    console.log("App online . . .");
});