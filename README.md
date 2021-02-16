# bemol_digital
Diretório criado para compartilhar o projeto desenvolvido e artefatos solicitados como parte do processo seletivo para software engineer [desafio tecnico]

# Sobre o projeto:

## Bem Vindo ao users_account! =)

Olá! O users_account é uma mini-aplicação WEB desenvolvida em nodeJS, com o objetivo de disponibilizar uma tela de cadastro de contas de usuário. Os dados cadastrados são salvos em um arquivo representando um banco de dados contido dentro da aplicação. O users_account realiza uma comunicação com a webservice (viaCEP), com a intenção de obter dados de resposta como logradouro, bairro, localidade e UF com base no CEP informado pelo usuário.


## Requisitos

Com o objetivo de tornar simples a execução da aplicação e a instalação de bibliotecas complementares para execução da mesma, optou-se por escolher a tecnologia nodeJS. Sendo assim, para que seja possível rodar a aplicação localmente na máquina, caso não tenha, é necessário a instalação do **nodeJS**. 
- [Download | Node.js](https://nodejs.org/en/download/)

Obs: a versão utilizada nos testes foi a 14.15.5; Sistema Operacional Windows 10.
## Configuração Inicial

Após a instalação do nodeJS na máquina, basta abrir o prompt de comando/console do seu SO  e seguir até a raiz do projeto (users_account). Estando nela, execute o seguinte comando:
> npm i

Resultado: as dependências necessárias para execução do projeto serão baixadas do repositório NPM, possibilitando a execução da aplicação depois.


## Execução

Dependencias baixadas e sem nenhuma mensagem de erro obtida ao longo dos download's, o comando para iniciar a aplicação:
> npm start

Retorno esperado: No console deve surgir uma msg "Servidor executando na porta 8081". Com isto, basta abrir o navegador e digitar na barra de endereços: **localhost:8081**
 
## Preenchimento automático de logradouro, bairro, cidade e estado com base no CEP informado

O sistema está programado para que após a inserção do CEP pelo usuário e sua saída do referido campo, os dados citados acima sejam preenchidos automaticamente com base no retorno informado pela webService viaCEP. Caso seja um CEP válido, logradouro, bairro, cidade e estado serão populados. Caso seja inválido ou inconsistente, uma mensagem de instrução é exibida ao usuário no momento da iteração com o sistema.

## Persistência das informações

Quando todos os dados ou aqueles obrigatórios forem preenchidos e o usuário clicar em "Cadastrar ", as informações são armazenadas dentro da aplicação, em um arquivo chamado **bancoDeDados.db**. A cada nova persistência, um ID é atrelado ao dado em questão, facilitando sua manipulação posteriormente em casos de querer expandir a aplicação, como funcionalidades a serem implementadas de listagem, atualização e remoção.

# Sobre o C4 model

Por ausência de dominio no uso de ferramentas específicas para elaboração do C4 model e pela constatação de curva de aprendizado um pouco aquém do que eu esperava, optei por elaborar manualmente com as formas disponibilizadas no pacote office da microsoft. Outro detalhe importante, é que eu não havia tido contato algum com o c4 model, então ao atender este desafio técnico, procurei fazê-lo ao máximo conforme ia compreendendo nas leituras de artigos presentes na internet.

# Sobre o questionário

Conforme solicitado, respondi as 5 perguntas e salvei no arquivo.txt
