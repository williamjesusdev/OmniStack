import React from "react";
import { FiLogIn, FiSun, FiMoon } from "react-icons/fi";

import * as S from "./styles";

import logo from "../../assets/logo.svg";
import logoDark from "../../assets/logoDark.svg";
import heroesImg from "../../assets/heroes.png";

export default function Logon({ toggleTheme, theme }) {
  return (
    <S.Container>
      <S.Section>
        {theme.title === "main" ? (
          <S.Image src={logo} alt="Be The Hero" />
        ) : (
          <S.Image src={logoDark} alt="Be The Hero" />
        )}
        <S.Form>
          <S.Title>Faça seu logon</S.Title>
          <S.Input placeholder="Sua ID" />
          <S.Button type="submit">Entrar </S.Button>
          <S.Group>
            <S.Anchor to="/register">
              <FiLogIn size={16} color={theme.primary} />
              Não tenho cadastro
            </S.Anchor>
            {theme.title === "main" ? (
              <FiMoon size={32} color={theme.primary} onClick={toggleTheme} />
            ) : (
              <FiSun size={32} color={theme.primary} onClick={toggleTheme} />
            )}
          </S.Group>
        </S.Form>
      </S.Section>
      <S.Image src={heroesImg} alt="Heroes " />
    </S.Container>
  );
}
