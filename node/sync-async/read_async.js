let fs = require("fs");

let readAsync = function (file) {
    console.log("Leitura assíncrona . . . ");

    let init = new Date().getTime();
    fs.readFile(file);
    let end = new Data().getTime();

    console.log(`Bloqueio assícrono: ${end - init}ms`);
};

module.exports = readAsync;