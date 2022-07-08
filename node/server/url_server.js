/**
 *  A função url.parse(request.url, true) fez um parser da url obtida
    pela requisição do cliente (request.url)

    O módulo url permite organizar todas as urls da aplicação.
 */

let http = require("http");
let url = require("url");

let server = http.createServer(function (request, response) {
    response.writeHead(200, { "content-text": "text/html" });
    response.write("<h1>Dados da query string</h1>");

    let result = url.parse(request.url, true);

    for (let key in result.query) {
        response.write("<h2>`${key} : ${result.query[key]}`</h2>");
    }

    response.end();
});

server.listen(3000, function () {
    console.log("Servidor http . . . ")
});