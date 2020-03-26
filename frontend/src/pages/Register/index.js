import React from "react";
import { FiArrowLeft } from "react-icons/fi";

import * as S from "./styles";

import logo from "../../assets/logo.svg";

export default function Register() {
  return (
    <S.Container>
      <S.Content>
        <S.Section>
          <S.Image src={logo} alt="Be The Hero" />
          <S.Title>Cadastro</S.Title>
          <S.Paragraph>
            Faça seu cadastro entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </S.Paragraph>
          <S.Anchor to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para o logon
          </S.Anchor>
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
