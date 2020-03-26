<div align="center">
  <img src="./frontend/src/assets/logo.svg" height="100px" alt="Be the hero"/>
</div>

<h3 align="center">
  A platform to help ONGs raise funds to solve cases
</h3>

<div align="center">
  <img alt="Made by William Jesus" src="https://img.shields.io/badge/made%20by-William%20Jesus-%23E02041"/>
  <img alt="Language count" src="https://img.shields.io/github/languages/count/williamjesusdev/Be-the-hero?color=%23E02041"/>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-%23E02041"/>
</div>
<div>

<p align="center">
  <a aria-label="Versão do Node" href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.16.1">
    <img src="https://img.shields.io/badge/node.js@lts-12.16.1-informational?logo=Node.JS"></img>
  </a>
  <a aria-label="Versão do React" href="https://github.com/facebook/react/blob/master/CHANGELOG.md#16131-march-19-2020">
    <img src="https://img.shields.io/badge/react-16.13.1-informational?logo=react"></img>
  </a>
  <a aria-label="Dia 3 de 5" href="https://rocketseat.com.br/week/aulas/11.0?aula=3">
    <img src="https://img.shields.io/badge/Dia-3-blue"></img>
  </a>
</p>
<br>

---

# BeTheHero

Esse projeto foi desenvolvido durante a Semana Omnistack 11.0 da <a href="https://rocketseat.com.br/">Rocketseat</a> que durou de 23/03 a 28/03/2020. O projeto será frequentemente atualizado com novas **features** para fixação de conteúdo e upgrade das minhas **skills**.
<br>

## Instalação

Para instalar as dependências e executar o Servidor (modo desenvolvimento), clone o projeto em seu computador efetue uma cópia do arquivo `.env.example` e renomeie como `.env` no **backend**, faça as alterações necessárias e em seguida execute (à partir do _root_ do projeto):

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
<br>

## Backend

Veja mais em [backend/README.md](./backend) para informações sobre o servidor e sua arquitetura.
<br>

## Frontend

Veja mais em [frontend/README.md](./frontend) para informações sobre client Web e os padrões.
<br>

## Imnsonia

Para testar a API do BeTheHero, baixe e instale o [Insomnia](https://insomnia.rest/download/) e em seguida clique na Workspace → `Import/Export` → `Import Data` → `From File` → e selecione o arquivo [`Insomnia.json`](./Insomnia.json). Assim que terminar, o resultado ficará assim:

<img align="center" src="./static/insomnia.png"></img>

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Be%20The%20Hero&uri=https%3A%2F%2Fraw.githubusercontent.com%2FWilliamJesusDev%2FOmniStack%2Fmaster%2FBeTheHero%2FInsomnia.json)
<br>

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

##### FEATURES - EXTRAS

---

- `feature 01`

  - adição e configuração das bibliotecas **eslint**, **prettier**, **sucrase** e **dotenv** no backend possibilitando uma melhora produtividade.
    <br>

- `feature 02`

  - adição e configuração da biblioteca **styled-components** no frontend permitindo estilização perfeita e sem quebras nos componentes.
    <br>

#### PROJETO EM ANDAMENTO | `26/03/2020`

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

Criado com :hearts: por William :wave:
