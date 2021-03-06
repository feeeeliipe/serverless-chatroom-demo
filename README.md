# serverless-chatroom-demo

Exemplo de criação de uma API com AWS Lambda utilizando Serverless Framework

- Artigo base do projeto: https://blog.sourcerer.io/building-rest-services-with-serverless-framework-in-node-js-aws-lambda-and-dynamodb-765beada2c57

## Como realizar o deploy?

### Instalação do Serveless Framework

> Para instalar o serveless framework de forma global na maquina utilize `npm i -g serverless`

### Instalação do AWS CLI

> Para instalar o AWS CLI, siga as instruções encontradas em: https://aws.amazon.com/cli/

### Configuração das credenciais da AWS no Serverless Framework

Documentação do Serverless Framework:

> https://www.serverless.com/framework/docs/providers/aws/guide/credentials/

Video de exemplo das configurações de credencial:

> https://www.youtube.com/watch?v=KngM5bfpttA

### Execução do Deploy

> Na raiz do projeto, execute o comando: `serveless deploy`

### Utilização

> Após realizar o deploy com sucesso na AWS, o CLI do Serverless Framework exibirá a lista dos endpoints disponibilizados pela aplicação e os respectivos métodos HTTP que devem ser utilizados, conforme exemplo:
> ![Endpoints](./img/endpoints.png)
