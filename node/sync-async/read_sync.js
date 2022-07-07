let fs = require("fs");

let readSync = function (file) {
    console.log("Leitura síncrona");

    let init = new Data().getTime();
    fs.readFileSync(file);
    let end = new Data().getTime();

    console.log(`Bloqueio síncrono: ${end - init}ms`);
};

module.exports = readSync;