/**
 *  Realizando o download de um arquivo (código-fonte do
    node.js) e, quando termina, realiza um benchmark comparando o tempo de bloqueio
    entre as funções de leitura síncrona (fs.readFileSync()) e assíncrona
    (fs.readFile()) do Node.js
 */

let http = require("http");
let fs = require("fs");
let readAsync = require('./read_async');
let readSync = require('./read_sync');
let file = "./node.exe";
let stream = fs.createWriteStream(file);
let download = "http://nodejs.org/dist/latest/node.exe";

http.get(download, function (res) {
    console.log("Executando download NodeJS . . .");
    res.on('data', function (data) {
        stream.write(data);
    });

    res.on('end', function () {
        stream.end();
        console.log("Download finalizado!");
        readAsync(file);
        readSync(file);
    });
});