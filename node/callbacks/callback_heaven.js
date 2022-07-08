/**
 *  Melhorando a legibilidade de codigo em relação ao arquivo callback_hell.js 
 * 
 *  De forma mais semântico e legível, o nome das funções, diminuíndo o número de encadeamentos
    das funções de callback.
 */

let fs = require("fs");

let readFolder = function () {
    fs.readdir(__dirname, function (error, folder) {
        if (error) {
            return error;
        }

        folder.forEach(function (file) {
            read(file);
        });
    });

    let read = function (file) {
        let path = "./" + file;

        fs.stat(path, function (error, stat) {
            if (error) {
                return error;
            }

            if (stat.isFile()) {
                console.log("%s %d bytes", file, stat.size);
            }
        });
    };

}

readFolder();