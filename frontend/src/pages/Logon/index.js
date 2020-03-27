import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FiLogIn, FiSun, FiMoon } from "react-icons/fi";

import * as S from "./styles";

import api from "../../services/api";

import logo from "../../assets/logo.svg";
import logoDark from "../../assets/logoDark.svg";
import heroesImg from "../../assets/heroes.png";

export default function Logon({ toggleTheme, theme }) {
  const [id, setId] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("ongName")) {
      history.push("/profile");
    }
  });

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);

      history.push("/profile");
    } catch (err) {
      console.log(err);
      alert(`Falha no Login, tente novamente!`);
    }
  }
  return (
    <S.Container>
      <S.Section>
        {theme.title === "main" ? (
          <S.Image src={logo} alt="Be The Hero" />
        ) : (
          <S.Image src={logoDark} alt="Be The Hero" />
        )}
        <S.Form onSubmit={handleLogin}>
          <S.Title>Faça seu logon</S.Title>
          <S.Input
            value={id}
            onChange={e => setId(e.target.value)}
            placeholder="Sua ID"
            autoFocus
          />
          <S.Button type="submit">Entrar </S.Button>
          <S.Group>
            {theme.title === "main" ? (
              <FiMoon color={theme.primary} onClick={toggleTheme} />
            ) : (
              <FiSun color={theme.primary} onClick={toggleTheme} />
            )}
            <S.Anchor to="/register">
              <FiLogIn size={20} color={theme.primary} />
              Não tenho cadastro
            </S.Anchor>
          </S.Group>
        </S.Form>
      </S.Section>
      <S.Image
        src={heroesImg}
        alt="Heroes "
        style={{
          filter: theme.title !== "main" && "contrast(1.2) brightness(1.2)"
        }}
      />
    </S.Container>
  );
}
