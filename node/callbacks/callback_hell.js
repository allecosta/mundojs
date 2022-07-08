/**
 *  leitura de arquivos do diretório e imprime
    na tela nome e tamanho em bytes
 */

let fs = require("fs");

fs.readdir(__dirname, function (error, contents) {
    if (error) {
        throw error;
    }

    contents.forEach(function (content) {
        let path = './' + content;
        fs.stat(path, function (error, stat) {
            if (error) {
                throw error;
            }

            if (stat.isFile()) {
                console.log("%s %d bytes", content, stat.size);
            }
        });
    });
});