const express = require('express');

const app = express();

//Cria o servidor
app.listen(3000, ()=> {
    console.log('Servidor Rodando na porta 3000');
});

//Rotas no express
app.get('/',(requisicao,resposta) =>{
    resposta.send('Ola Mundo!');
});

app.get('/contato', (req,res) => {
    res.send([{nome:'Humberto', idade:26}]);
});