import React, { useEffect, useState } from "react";
import api from "./services/api";
// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: Informações que um componente PAI passa para o componente FILHO (props)
// Estado: Informações ,amtodas pelo componente (Lembrar: conceito imutabilidade)

import "./css/App.css";
import "./css/global.css";
import "./css/sidebar.css";
import "./css/main.css";

import DevItem from "./components/DevItem";
import DevForm from "./components/DevForm";

function App() {
  const [dev, setDev] = useState("");
  const [devs, setDevs] = useState([]);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");
      setDevs(response.data);
    }

    loadDevs();
  }, [dev]);

  async function handleAdDev(data) {
    await api
      .post("/devs", data)
      .then(response => {
        setDevs([...devs, response.data]);
      })
      .catch(err => console.log(err));
  }

  async function handleDelDev(github) {
    if (window.confirm(`Excluir o Usuário ${github}?`)) {
      await api.delete(`/devs/${github}`);
      setDevs(devs.filter(dev => dev.github_username !== github));
    }
  }

  async function editModeState(github) {
    const response = await api.get(`/devs/${github}`);
    setDev(response.data);
    setEdit(true);
  }

  async function handleUpDev(dev) {
    if (window.confirm(`Confirma as alterações?`)) {
      await api
        .put(`/devs/${dev.github_username}`, dev)
        .then(() => {
          setEdit(false);
          setDev("");
        })
        .catch(err => console.log(err));
    } else {
      editModeState(dev.github_username);
    }
  }

  async function handleCancel() {
    setDev({});
    setEdit(false);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm
          dev={dev}
          onSubmit={handleAdDev}
          onEdit={edit}
          editMode={handleUpDev}
          onCancel={handleCancel}
        />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem
              key={dev._id}
              dev={dev}
              onEdit={editModeState}
              onDelete={handleDelDev}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
