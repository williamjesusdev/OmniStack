import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft, FiMoon, FiSun } from "react-icons/fi";

import * as S from "./styles";

import api from "../../services/api";

import logo from "../../assets/logo.svg";
import logoDark from "../../assets/logoDark.svg";

export default function Register({ toggleTheme, theme }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUF] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      const response = await api.post("ongs", data);
      alert(`Seu ID de acesso: ${response.data.id}`);

      localStorage.setItem("ongId", response.data.id);
      localStorage.setItem("ongName", name);

      history.push("/");
    } catch (err) {
      console.log(err);
      alert(`Erro no cadastro, tente novamente!`);
    }
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
        <S.Form onSubmit={handleRegister}>
          <S.Input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nome da ONG"
            autoFocus
          />
          <S.Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="E-mail"
            type="email"
          />
          <S.Input
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
            placeholder="WhatsApp"
          />
          <S.FormGroup>
            <S.Input
              value={city}
              onChange={e => setCity(e.target.value)}
              placeholder="Cidade"
            />
            <S.Input
              value={uf}
              onChange={e => setUF(e.target.value)}
              placeholder="UF"
              maxLength="2"
              style={{ width: "80px" }}
            />
          </S.FormGroup>
          <S.Button type="submit">Cadastrar</S.Button>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}
