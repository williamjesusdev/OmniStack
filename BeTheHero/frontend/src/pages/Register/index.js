import React from "react";
import { FiArrowLeft, FiMoon, FiSun } from "react-icons/fi";

import * as S from "./styles";

import logo from "../../assets/logo.svg";
import logoDark from "../../assets/logoDark.svg";

export default function Register({ toggleTheme, theme }) {
  return (
    <S.Container>
      <S.Content>
        <S.Section>
          {theme.title === "main" ? (
            <S.Image src={logo} alt="Be The Hero" />
          ) : (
            <S.Image src={logoDark} alt="Be The Hero" />
          )}
          <S.Title>Cadastro</S.Title>
          <S.Paragraph>
            Faça seu cadastro entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </S.Paragraph>
          <S.Group>
            <S.Anchor to="/">
              <FiArrowLeft size={16} color={theme.primary} />
              Voltar para o login
            </S.Anchor>
            {theme.title === "main" ? (
              <FiMoon size={32} color={theme.primary} onClick={toggleTheme} />
            ) : (
              <FiSun size={32} color={theme.primary} onClick={toggleTheme} />
            )}
          </S.Group>
        </S.Section>
        <S.Form>
          <S.Input placeholder="Nome da ONG" />
          <S.Input placeholder="E-mail" type="email" />
          <S.Input placeholder="WhatsApp" />
          <S.FormGroup>
            <S.Input placeholder="Cidade" />
            <S.Input placeholder="UF" style={{ width: "80px" }} />
          </S.FormGroup>
          <S.Button>Cadastrar</S.Button>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}
