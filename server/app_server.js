let http = require("http");

let server = http.createServer(function (request, response) {
    response.writeHead(200, { "content-type": "text/html" });

    if (request.url == "/") {
        response.write("<h1>Página Principal</h1>");
    } else if (request.url == "/bemvindo") {
        response.write("<h1>Olá, seja bem vindo!</h1>");
    } else {
        response.write("<h1>OPS! Página não encontrada :(</h1>");
    }

    response.end();
});

server.listen(3000, function () {
    console.log("Servidor rodando . . . ");
});