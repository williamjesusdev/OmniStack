<img src="./static/omnistack.jpg" align="center"></img>

<h1 align="center">Semana Omnistack 11.0</h1>
<p align="center">Projeto desenvolvido durante a Semana Omnistack da <a href="https://rocketseat.com.br/">Rocketseat</a> de 23/03 a 28/03/2020</p>

<p align="center">
  <a aria-label="Versão do Node" href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.16.1">
    <img src="https://img.shields.io/badge/node.js@lts-12.16.1-informational?logo=Node.JS"></img>
  </a>
  <a aria-label="Versão do React" href="https://github.com/facebook/react/blob/master/CHANGELOG.md#16131-march-19-2020">
    <img src="https://img.shields.io/badge/react-16.13.1-informational?logo=react"></img>
  </a>
  <a aria-label="Dia  de 5" href="https://rocketseat.com.br/week/aulas/11.0?aula=3">
    <img src="https://img.shields.io/badge/Dia-3-green"></img>
  </a>
</p>

# BeTheHero

Projeto será frequentemente atualizado com novas **features** em prol de estudo próprio, para fixação do conteúdo e upgrade das **skills**

## Instalação

Para instalar as dependências e executar o Servidor (modo desenvolvimento), clone o projeto em seu computador e em seguida execute (à partir do _root_ do projeto):
Após clonar o repositório efetue uma cópia do arquivo `.env.example` e renomeie como `.env` no **backend**.

```bash
cd backend
yarn install
yarn dev
```

Para iniciar o Frontend do React utilize o comando (à partir do _root_ do projeto):

```bash
cd frontend
yarn install
yarn dev
```

Assim que o processo terminar, automaticamente será aberta no seu navegador a página `localhost:3000` contendo o Projeto desenvolvido até agora (Dia 3 de 5).

## Backend

Veja mais em [backend/README.md](./backend) para informações sobre o servidor e sua arquitetura.

## Frontend

Veja mais em [frontend/README.md](./frontend) para informações sobre client Web e os padrões.

## Imnsonia

Para testar a API do BeTheHero, baixe e instale o [Insomnia](https://insomnia.rest/download/) e em seguida clique na Workspace → `Import/Export` →
`Import Data` → `From File` → e selecione o arquivo `Insomnia.json` deste repositório. Assim que terminar, o resultado ficará assim:

##### CRONOGRAMA

---

- `Aula 01 - 23/03`

  - bate-papo sobre a stack `Node | React | React Native`
  - informações sobre o projeto **BeTheHero**
  - configuração do ambiente de desenvolvimento e dicas
    <br>

- `Aula 02 - 24/03`

  - inicio do projeto [backend](./backend) - `Node`
  - configuração do servidors utilizando `express`
  - configuração do banco de dados `sqlite` com `knex`
  - configuração de rotas de requisição `Http - Requests`
  - configuração de **_migrations_** e **_controllers_**
  - testes de requisições através do [Insomnia.REST](https://insomnia.rest/)
  - adição da biblioteca `cors` no **backend** possibilitando acesso via **frontend**
    <br>

- `Aula 03 - 25/01`

  - inicio do projeto [frontend](./frontend) - `React`
  - criação do projeto com `yarn create-react-app`
  - configuração de rotas de acesso com `react-router-dom`
  - criação das pages **Logon** e **Register** `Components`
  - adição da biblioteca `axios` e configuração do `services/api.js` para requisições ao **backend**
    <br>

- `Aula 04 - 26/01`

  - inicio do projeto [mobile](./mobile) - `React Native`
  - adição global da **expo-cli** com `yarn global add expo-cli`
  - criação do projeto com `expo init mobile`, `cd mobile` e `expo start`
  - configuração de rotas de acesso com `react-navigation`
  - criação das páginas **Main** e **Profile** `Components`
  - criação do Mapa utilizando **MapView**, **Marker** e **Callout** `react-native-maps`
  - adição da biblioteca `axios` e configuração do `services/api.js`
    <br>

- `Aula 05 - 27/01`
  - inclusão do **Real-Time** `socket.io` **backend**
  - inclusão do **Real-Time Client** `socket.io-client` **fontend** e **mobile**
  - inclusão de notificação no **mobile** de novos Devs no Radar de 10km da com as techs buscadas
  - finalização do projeto e bate-papo
    <br>

##### FEATURES - EXTRAS

---

- `feature 01`

  - adição e configuração das bibliotecas **eslint**, **prettier**, **sucrase** e **dotenv** no backend possibilitando uma melhora produtividade.
    <br>

- `feature 02`

  - adição e configuração da biblioteca **styled-components** no frontend permitindo estilização perfeita e sem quebras nos componentes.
    <br>

- `feature 03`

  - configuração de um servidor `src/server.js` dentro da raiz do projeto [frontend](./frontend) que envia o client diretamente pra pasta `build` do projeto, contendo todos os arquivos estáticos da aplicação
    <br>

- `feature 05`
  - deploy do projeto para o heroku de ambos projetos [backend](https://backend-bethehero.herokuapp.com) e [frontend](https://web-bethehero.herokuapp.com)
    <br><br>

#### PROJETO FINALIZADO | `29/03/2020`

## Licença

[MIT](./LICENSE) &copy; [Rocketseat](https://rocketseat.com.br/)
