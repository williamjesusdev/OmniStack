import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FiPower, FiTrash2, FiMoon, FiSun } from "react-icons/fi";

import * as S from "./styles";

import api from "../../services/api";

import logo from "../../assets/logo.svg";
import logoDark from "../../assets/logoDark.svg";

export default function Profile({ toggleTheme, theme }) {
  const [incidents, setIncidents] = useState([]);

  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");

  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("ongName")) {
      return history.push("/");
    }

    api
      .get("profile", {
        headers: {
          Authorization: ongId
        }
      })
      .then(response => {
        setIncidents(response.data);
      });
  }, [ongId, history]);

  async function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      console.log(err);
      alert(`Erro ao deletar caso, tente novamente!`);
    }
  }
  return (
    <S.Container>
      <S.Header>
        {theme.title === "main" ? (
          <S.Image src={logo} alt="Be The Hero" />
        ) : (
          <S.Image src={logoDark} alt="Be The Hero" />
        )}
        <S.Span>Bem vinda, {ongName}</S.Span>
        <S.Anchor to="/incidents/new">Cadastrar novo caso</S.Anchor>
        <S.Button onClick={handleLogout}>
          <FiPower size={20} color={theme.primary} />
        </S.Button>
        <S.Button onClick={toggleTheme}>
          {theme.title === "main" ? (
            <FiMoon size={20} color={theme.primary} />
          ) : (
            <FiSun size={20} color={theme.primary} />
          )}
        </S.Button>
      </S.Header>
      <S.H1>Casos Cadastrados</S.H1>
      <S.List>
        {incidents.map(incident => (
          <S.Item key={incident.id}>
            <S.Strong>CASO:</S.Strong>
            <S.Paragraph>{incident.title}</S.Paragraph>
            <S.Strong>DESCRIÇÃO:</S.Strong>
            <S.Paragraph>{incident.description}</S.Paragraph>
            <S.Strong>VALOR:</S.Strong>
            <S.Paragraph>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)}
            </S.Paragraph>
            <S.Icon onClick={() => handleDeleteIncident(incident.id)}>
              <FiTrash2 size={20} color={theme.paragraph} />
            </S.Icon>
          </S.Item>
        ))}
      </S.List>
    </S.Container>
  );
}
