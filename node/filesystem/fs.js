/**
 *  O fs.readFile() faz uma leitura assíncrona do arquivo index.html
    Depois que o arquivo foi carregado, é invocado uma função callback para fazer os tratamentos
    finais, seja de erro ou de retorno do arquivo

    O fs.readFileSync()
    realiza uma leitura síncrona, bloqueando a aplicação até terminar sua leitura e retornar
    o arquivo.
 */


let fs = require("fs");

fs.readFile('/index.html', function (erro, arquivo) {

    if (erro) throw erro;
    console.log(arquivo);
});

let arquivo = fs.readFileSync('/index.html');
console.log(arquivo);