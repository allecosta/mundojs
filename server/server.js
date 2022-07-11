let http = require("http");

let server = http.createServer(function (request, response) {
    response.writeHead(200, { "content-type": "text/html" });
    response.write("<h1>Olá Mundo JS !!</h1>");
    response.end();
});

server.listen(3000, function () {
    console.log("Servidor JS rodando . . . ");
});


