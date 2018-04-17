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

    var topico = {
        titulo: "Erro de compilação",
        conteudo: "Não consigo compilar meu projeto",
        tags: ["Java", "Android", "Mobile"]
    };

    var colecao = db.collection("topicos");

    colecao.insertOne(topico, function(erro, resultado){
    if(erro)
        console.log("Erro ao inserir documento: " + erro);
    else
        console.log("Documento inserido com sucesso");
});

    db.close();

});


