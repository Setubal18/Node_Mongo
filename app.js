//Conexao com bd simples.
// var MongoClient = require('mongodb').MongoClient;
//
// var servidor = 'mongodb://localhost:27017/db_teste';
//
// MongoClient.connect(servidor, function(erro, db) {
//   if(erro)
//     console.log("Erro ao estabelecer conexao:" + erro);
//   else
//     console.log("Conexao estabelecida com sucesso.");
//
//   db.close();
// };

var MongoClient = require('mongodb').MongoClient;

var servidor = 'mongodb://localhost:27017/db_teste';

MongoClient.connect(servidor, function (erro, db) {
    if (erro)
        console.log("Erro ao estabelecer conexao:" + erro);
    else
        console.log("Conexao estabelecida com sucesso.");

    db.close();
};


