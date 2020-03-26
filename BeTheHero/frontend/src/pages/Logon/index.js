import React from "react";
import { FiLogIn } from "react-icons/fi";

import * as S from "./styles";

import logo from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

export default function Logon() {
  return (
    <S.Container>
      <S.Section>
        <S.Image src={logo} alt="Be The Hero" />
        <S.Form>
          <S.Title>Faça seu logon</S.Title>
          <S.Input placeholder="Sua ID" />
          <S.Button type="submit">Entrar </S.Button>
          <S.Anchor to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </S.Anchor>
        </S.Form>
      </S.Section>
      <S.Image src={heroesImg} alt="Heroes " />
    </S.Container>
  );
}
