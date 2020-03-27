# AirCnC - Code and Coffee
> ![](https://img.shields.io/github/stars/williamjesusdev/aircnc.svg) 
![](https://img.shields.io/github/forks/williamjesusdev/aircnc.svg) 
![](https://img.shields.io/github/tag/williamjesusdev/aircnc.svg) 
![](https://img.shields.io/github/release/williamjesusdev/aircnc.svg) 
![](https://img.shields.io/github/issues/williamjesusdev/aircnc.svg)<br>
Projeto iniciado durante a **Semana OmniStack 9.0** da [Rocketseat](https://rocketseat.com.br/) `de 30/09 a 04/10/2019` e frequentemente atualizado com novas **features** através de estudo próprio para fixação de conteúdo e upgrade das minhas **skills**
<br>

##### CRONOGRAMA
------------
- `Aula 01 - 30/09`
  - bate-papo sobre a stack `Node | React | React Native`
  - informações sobre o projeto **AirCnC**
  - configuração do ambiente de desenvolvimento e dicas
<br>

- `Aula 02 - 01/10`
  - inicio do projeto [backend](./backend) - `Node`
  - configuração do servidors utilizando `express`
  - configuração do banco de dados `mongoose`
  - configuração de rotas de requisição `Http - Requests`
  - configuração de ***models*** e ***controllers***
  - testes de requisições através do [Insomnia.REST](https://insomnia.rest/)
<br>

- `Aula 03 - 02/10`
  - inicio do projeto [frontend](./frontend) - `React`
  - criação do projeto com `yarn create-react-app`
  - configuração de rotas de acesso com `react-router-dom`
  - criação de páginas **Login**, **Dahsboard** e **New** `Components`
  - adição da biblioteca `cors` no **backend** possibilitando acesso no **frontend**
  - adição da biblioteca `axios` e configuração do `services/api.js` para requisições ao **backend**
<br>

- `Aula 04 - 03/10`
  - inicio do projeto [mobile](./mobile) -  `React Native`
  - adição global da **expo-cli** com `yarn global add expo-cli`
  - criação do projeto com `expo init mobile`, `cd mobile` e `expo start`
  - configuração de rotas de acesso com `react-navigation`
  - criação de páginas **Login**, **List** e **Book** `Components`
  - criação da subpágina **SpotList** `components/SpotList.js`
  - adição da biblioteca `axios` e configuração do `services/api.js`
<br>

- `Aula 05 - 04/10`
  - inclusão do **Real-Time** `socket.io` **backend**
  - inclusão do **Real-Time** `socket.io-client` **fontend** e **mobile**
  - inclusão de notificação no **frontend** das solicitações de reserva de **Spot**
  - inclusão de notificação no **mobile** das confirmações de reserva em Real-Time
  - finalização do projeto e bate-papo
<br>


##### FEATURES - EXTRAS
------------
- `feature 01`
  - adição e configuração de 'variáveis de ambiente' `config/envs.js` em todas as camadas do projeto afim de facilitar o desenvolvimento em diversos ambientes 'Trabalho' e 'Casa'
<br>

- `feature 02`
  - adição de botões extras no com **logout** completo do usuário em ambas as plataformas além de possibilitar a mlehora de navegação
<br>

- `feature 03`
  - adição da biblioteca `concurrently` que possibilita a execução de todo o projeto com apenas um código `yarn start` dentro do diretório [backend](./backend)
<br>

- `feature 04`
  - configuração de consulta ao banco de dados para busca de solicitações efetuadas e não **confirmadas/recusadas**, exibindo no **logon** do usuário
<br>

- `feature 05`
  - adição de autenticação simples, possibiltando a configuração de rotas protegidas, impedindo assim o acesso indevido ao sistema, além da adição de página de erro `404` para solicitações de rotas não encontradas.
<br>

- `feature 06`
  - configuração do [client](./client) utilizando a extensão [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) diretamente no **Visual Studio Code** (editor utilizado durante o projeto) [+informações](#append).
<br><br>

------------
#### Append
------------
##### Rest Client - Extensão
Extensão utilizada para configurar o cliente *REST* no próprio **Visual Studio Code**
<p><a href="https://travis-ci.org/Huachao/vscode-restclient/" target="_blank" rel="noreferrer noopener"><img src="https://travis-ci.org/Huachao/vscode-restclient.svg?branch=master" alt="Travis"></a> <a href="https://gitter.im/Huachao/vscode-restclient?utm_source=badge&amp;utm_medium=badge&amp;utm_campaign=pr-badge&amp;utm_content=badge" target="_blank" rel="noreferrer noopener"><img src="https://badges.gitter.im/Huachao/vscode-restclient.svg" alt="Join the chat at https://gitter.im/Huachao/vscode-restclient"></a> <a href="https://marketplace.visualstudio.com/items?itemName=humao.rest-client" target="_blank" rel="noreferrer noopener"><img src="https://vsmarketplacebadge.apphb.com/version-short/humao.rest-client.svg" alt="Marketplace Version"></a> <a href="https://marketplace.visualstudio.com/items?itemName=humao.rest-client" target="_blank" rel="noreferrer noopener"><img src="https://vsmarketplacebadge.apphb.com/downloads/humao.rest-client.svg" alt="Downloads"></a> <a href="https://marketplace.visualstudio.com/items?itemName=humao.rest-client" target="_blank" rel="noreferrer noopener"><img src="https://vsmarketplacebadge.apphb.com/installs/humao.rest-client.svg" alt="Installs"></a> <a href="https://marketplace.visualstudio.com/items?itemName=humao.rest-client" target="_blank" rel="noreferrer noopener"><img src="https://vsmarketplacebadge.apphb.com/rating/humao.rest-client.svg" alt="Rating"></a> <a href="https://david-dm.org/Huachao/vscode-restclient" target="_blank" rel="noreferrer noopener"><img src="https://david-dm.org/Huachao/vscode-restclient.svg" alt="Dependency Status"></a></p>

> Name: **REST Client** <br>
> Id: humao.rest-client <br>
> Description: REST Client for Visual Studio Code <br>
> Version: 0.22.2 <br>
> Publisher: Huachao Mao <br>
> VS Marketplace Link: <br>
> https://marketplace.visualstudio.com/items?itemName=humao.rest-client <br>

------------

#### PROJETO FINALIZADO | `03/11/2019`
