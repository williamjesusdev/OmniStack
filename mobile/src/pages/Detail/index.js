import React from "react";
import { Linking } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";

import * as S from "./styles";

import logoImg from "../../assets/logo.png";

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const value = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(incident.value);

  let message = `Olá ${incident.name}, estou entrando em contato pois eu gostaria de ajudar com o caso "${incident.title}" com o valor de ${value}`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message
    });
  }

  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}=${message}`);
  }

  return (
    <S.Container>
      <S.Header>
        <S.Image source={logoImg} />
        <S.Button onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </S.Button>
      </S.Header>
      <S.Incident>
        <S.Property>ONG:</S.Property>
        <S.Value>
          {incident.name} de {incident.city}/{incident.uf}
        </S.Value>
        <S.Property>CASO:</S.Property>
        <S.Value>{incident.title}</S.Value>
        <S.Property>VALOR:</S.Property>
        <S.Value>{value}</S.Value>
      </S.Incident>
      <S.Contact>
        <S.Title>Salve o dia!</S.Title>
        <S.Title>Seja o herói desse caso.</S.Title>
        <S.Description>Entre em contato</S.Description>
        <S.Actions>
          <S.Action onPress={sendWhatsApp}>
            <S.ActionText>WhatsApp</S.ActionText>
          </S.Action>
          <S.Action onPress={sendMail}>
            <S.ActionText>E-mail</S.ActionText>
          </S.Action>
        </S.Actions>
      </S.Contact>
    </S.Container>
  );
}
