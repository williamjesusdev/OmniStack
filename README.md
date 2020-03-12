<img src="./static/omnistack.png" align="center"></img>
<h1 align="center">Semana Omnistack 10.0</h1>
<p align="center">Projeto desenvolvido durante a Semana Omnistack da <a href="https://rocketseat.com.br/">Rocketseat</a> de 13/01 a 19/01/2020</p>

<p align="center">
  <a aria-label="Versão do Node" href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.14.1">
    <img src="https://img.shields.io/badge/node.js@lts-12.14.1-informational?logo=Node.JS"></img>
  </a>
  <a aria-label="Versão do React" href="https://github.com/facebook/react/blob/master/CHANGELOG.md#16120-november-14-2019">
    <img src="https://img.shields.io/badge/react-16.12.0-informational?logo=react"></img>
  </a>
  <a aria-label="Desafios" href="DESAFIOS.md">
  	<img src="https://img.shields.io/badge/desafios-OK-blueviolet"></img>
  </a>
  <a aria-label="Dia 5 de 5" href="https://rocketseat.com.br/week-10/aulas#4">
    <img src="https://img.shields.io/badge/Dia-5-green"></img>
  </a>
</p>

# DevRadar
> ![](https://img.shields.io/github/stars/williamjesusti/semanaomnistack10.svg) 
![](https://img.shields.io/github/forks/williamjesusti/semanaomnistack10.svg) 
![](https://img.shields.io/github/tag/williamjesusti/semanaomnistack10.svg) 
![](https://img.shields.io/github/release/williamjesusti/semanaomnistack10.svg) 
![](https://img.shields.io/github/issues/williamjesusti/semanaomnistack10.svg) <br>
Projeto será frequentemente atualizado com novas **features** em prol de estudo próprio, para fixação do conteúdo e upgrade das **skills**
<br>

## Instalação
Configure o **MongoDB** e atualize a string de conexão com seu `User:Senha` no arquivo `index.js` do **backend**.  
Para instalar as dependências e executar o Servidor (modo desenvolvimento), clone o projeto em seu computador e em seguida execute (à partir do *root* do projeto):
```bash
cd backend
yarn install
yarn dev
```
Para iniciar o Frontend do React utilize o comando (à partir do *root* do projeto):
```bash
cd frontend
yarn install
yarn start
```
Assim que o processo terminar, automaticamente será aberta no seu navegador a página `localhost:3000` contendo o Projeto desenvolvido até agora (Dia 5 de 5).

## Backend
Veja mais em [backend/README.md](./backend) para informações sobre o servidor e sua arquitetura.

## Frontend
Veja mais em [frontend/README.md](./frontend) para informações sobre client Web e os padrões. O Frontend desenvolvido no Dia 3 (com o [desafio](DESAFIOS.md) feito) ficou assim:

<img align="center" src="./static/frontend.gif"></img>

## Imnsonia 
Para testar a API do DevRadar, baixe e instale o [Insomnia](https://insomnia.rest/download/) e em seguida clique na Workspace → `Import/Export` →  
`Import Data` → `From File` → e selecione o arquivo ` 	Insomnia_export.json` deste repositório. Assim que terminar, o resultado ficará assim:  

<img align="center" src="./static/insomnia.png"></img>


##### CRONOGRAMA
------------
- `Aula 01 - 13/01`
  - bate-papo sobre a stack `Node | React | React Native`
  - informações sobre o projeto **DevRadar**
  - configuração do ambiente de desenvolvimento e dicas
<br>

- `Aula 02 - 14/01`
  - inicio do projeto [backend](./backend) - `Node`
  - configuração do servidors utilizando `express`
  - configuração do banco de dados `mongoose`
  - configuração de rotas de requisição `Http - Requests`
  - configuração de ***models*** e ***controllers***
  - testes de requisições através do [Insomnia.REST](https://insomnia.rest/)
<br>

- `Aula 03 - 15/01`
  - inicio do projeto [frontend](./frontend) - `React`
  - criação do projeto com `yarn create-react-app`
  - configuração de rotas de acesso com `react-router-dom`
  - criação dos components **DevForm** e **DevItem** `Components`
  - adição da biblioteca `cors` no **backend** possibilitando acesso via **frontend**
  - adição da biblioteca `axios` e configuração do `services/api.js` para requisições ao **backend**
<br>

- `Aula 04 - 16/01`
  - inicio do projeto [mobile](./mobile) -  `React Native`
  - adição global da **expo-cli** com `yarn global add expo-cli`
  - criação do projeto com `expo init mobile`, `cd mobile` e `expo start`
  - configuração de rotas de acesso com `react-navigation`
  - criação das páginas **Main** e **Profile** `Components`
  - criação do Mapa utilizando **MapView**, **Marker** e **Callout** `react-native-maps`
  - adição da biblioteca `axios` e configuração do `services/api.js`
<br>

- `Aula 05 - 17/01`
  - inclusão do **Real-Time** `socket.io` **backend**
  - inclusão do **Real-Time Client** `socket.io-client` **fontend** e **mobile**
  - inclusão de notificação no **mobile** de novos Devs no Radar de 10km da com as techs buscadas
  - finalização do projeto e bate-papo
<br>


##### FEATURES - EXTRAS
------------
- `feature 01`
  - adição de botões extras no frontend **Cancelar** e **Buscar Localização** possibilitando uma melhora no uso
<br>

- `feature 02`
  - adição de alertas de confirmação de edição e deleção impossibilitando erros nos processos comuns ao usuário 
<br>

- `feature 03`
  - configuração de um servidor ``src/server.js`` dentro da raiz do projeto [frontend](./frontend) que envia o client diretamente pra pasta `build` do projeto, contendo todos os arquivos estáticos da aplicação
<br>

- `feature 05`
  - deploy do projeto para o heroku de ambos projetos [backend](https://backend-devradar.herokuapp.com) e [frontend](https://web-devradar.herokuapp.com)
<br><br>

#### PROJETO FINALIZADO | `20/01/2020`

## Licença

[MIT](./LICENSE) &copy; [Rocketseat](https://rocketseat.com.br/)