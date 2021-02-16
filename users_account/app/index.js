const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(
    bodyParser.json()//queremos tbm enviar dados do tipo json!
);

var nedb = require('nedb');
var bancoDeDados = new nedb({
    filename: 'bancoDeDados.db',
    autoload: true
});

module.exports = bancoDeDados;

app.get('/', function(requisicao, resposta) {
    resposta.sendFile(__dirname + '/views/cadastro.html');
});

app.post('/novo', (requisicao, resposta) => {
    const usuario = requisicao.body;

    bancoDeDados.insert(usuario, function(err){
        if(err){
            resposta.sendStatus(500);
            resposta.send(err);
        }else{
            resposta.sendStatus(200);
        }
    });    
});

app.get('/listagem', function(requisicao, resposta) {
    bancoDeDados.find({}, function (err, usuarios) {
        if(err){
            console.log(err);
            resposta.send(err);
        }else{
            resposta.send(usuarios);
            console.log(usuarios);
        }
    });
});


app.get('/img', function(requisicao, resposta) {
    resposta.sendFile(__dirname + '/resources/img/icone_64.png');
});

app.get('/js', function(requisicao, resposta) {
    resposta.sendFile(__dirname + '/resources/js/consulta.js');
});

app.listen('8081', function() {
    console.log('Servidor executando na porta 8081');
})