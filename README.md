# roteamentoResposta
Exercício de criação de um servidor HTTP com Routing &amp; Response utilizando Express, aplicado no curso Web Fullstack da Digital House.

## Introdução ao Roteamento e Resposta
>Quando criamos um servidor é necessário configurar o que tradicionalmente conhecemos como um sistema de roteamento, o route system. Este nos permite definir a resposta que vamos dar, dependendo da rota que o visitante está acessando.

>Para colocar este conceito em um cenário mais concreto, podemos dizer que o sistema de roteamento é como o porteiro de um edifício de consultórios médicos, o qual sabe com exatidão quem são as pessoas que atendem em cada consultório. Desta forma, cada vez que alguém chega para perguntar sobre alguma especialidade médica, esse sabe para onde deve dirigir a pessoa.

>Ok, mas o que acontece às pessoas que chegam ao consultório? Para isto precisamos falar sobre Response.

>Chamamos de Response a resposta que se obtém do site uma vez que o sistema de roteamento te envia para a rota requisitada. Esta resposta pode ser de diferentes tipos pois poderia te devolver apenas texto plano, texto em formato HTML, entregar um documento PDF, um arquivo de imagem ou qualquer formato que o navegador possa interpretar.

>*Texto Digital House*

Pelo sistema de roteamento do Express é possível definirmos na nossa aplicação todas as respostas conforme o método HTTP e a rota solicitada ao servidor.

## Definindo rota

    1. Inserimos a constate app que guarda a execução do Express
    2. Inserimos o método HTPP - get,post,put,patch ou delete
    3. O primeiro parâmetro da função é a string que define a rota que será tomada após a chamada da requisição
    4. Logo após temos a callback que será a responsável por responder a requisição de forma adequada
    5. Dentro desta função será definida a lógica de manipulação para resposta da requisição feita pelo cliente.
       -Utilizamos o método send() do objeto resposta(response) que envia uma resposta de texto ao navegador(cliente)
    
```
    app.get('/',(requisicao,resposta) =>{
    resposta.send('Ola Mundo!');
    });
```


**Foi adicionado ao pacote o nodemon(Forma de instalação -> npm install nodemon -g) para que o servidor não necessita-se ser parado a cada atualização do código. A cada vez que houver uma alteração e o arquivo for salvo, ele se encarregará de reiniciar o servidor. Para isso ao invés de iniciarmos o servidor pelo *node app.js* iniciamos pelo pacote nodemon -> *nodemon app.js***
