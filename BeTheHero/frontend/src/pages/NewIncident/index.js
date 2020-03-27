import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft, FiMoon, FiSun } from "react-icons/fi";

import * as S from "./styles";

import api from "../../services/api";

import logo from "../../assets/logo.svg";
import logoDark from "../../assets/logoDark.svg";

export default function Register({ toggleTheme, theme }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [validate, setValidate] = useState(false);

  const ongId = localStorage.getItem("ongId");

  const history = useHistory();

  useEffect(() => {
    if (title !== "" && description !== "" && value !== 0) {
      setValidate(true);
    }
  }, [title, description, value]);

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId
        }
      });
      history.push("/profile");
    } catch (err) {
      console.log(err);
      alert(`Erro ao adicionar caso, tente novamente!`);
    }
  }

  function handleCancel() {
    history.push("/profile");
  }

  return (
    <S.Container>
      <S.Content>
        <S.Section>
          {theme.title === "main" ? (
            <S.Image src={logo} alt="Be The Hero" />
          ) : (
            <S.Image src={logoDark} alt="Be The Hero" />
          )}
          <S.Title>Cadastrar novo caso</S.Title>
          <S.Paragraph>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </S.Paragraph>
          <S.Group>
            <S.Anchor to="/profile">
              <FiArrowLeft size={16} color={theme.primary} />
              Voltar para a home
            </S.Anchor>
            {theme.title === "main" ? (
              <FiMoon size={32} color={theme.primary} onClick={toggleTheme} />
            ) : (
              <FiSun size={32} color={theme.primary} onClick={toggleTheme} />
            )}
          </S.Group>
        </S.Section>
        <S.Form onSubmit={handleNewIncident} onReset={handleCancel}>
          <S.Input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Título do caso"
            autoFocus
          />
          <S.TextArea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Descrição"
          />
          <S.Input
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Valor em Reais"
            type="number"
          />
          <S.FormGroup>
            <S.Button type="reset">Cancelar</S.Button>
            <S.Button disabled={!validate} type="submit">
              Cadastrar
            </S.Button>
          </S.FormGroup>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}
