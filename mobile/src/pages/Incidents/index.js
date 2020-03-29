import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";

import logoImg from "../../assets/logo.png";
import api from "../../services/api";

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    loadIncidents();
  });

  async function loadIncidents() {
    if (loading) {
      return;
    }
    if (total > 0 && incidents.length === total) {
      return;
    }
    setLoading(true);

    const response = await api.get("incidents", { params: { page } });

    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers["x-total-count"]);
    setPage(page + 1);
    setLoading(false);
  }

  function navigateToDetail(incident) {
    navigation.navigate("Detail", { incident });
  }

  return (
    <S.Container>
      <S.Header>
        <S.Image source={logoImg} />
        <S.HeaderText>
          Total de <S.Bold>{total} Casos</S.Bold>.
        </S.HeaderText>
      </S.Header>
      <S.Title>Bem vindo!</S.Title>
      <S.Description>Escolha um dos casos abaixo e salve o dia.</S.Description>

      <S.IncidentList showsVerticalScrollIndicator={false}>
        <FlatList
          data={incidents}
          keyExtractor={incident => String(incident.id)}
          showsVerticalScrollIndicator={false}
          onEndReached={loadIncidents}
          onEndReachedThreshold={0.2}
          renderItem={({ item: incident }) => (
            <S.Incident>
              <S.Property>ONG:</S.Property>
              <S.Value>{incident.name}</S.Value>
              <S.Property>CASO:</S.Property>
              <S.Value>{incident.title}</S.Value>
              <S.Property>VALOR:</S.Property>
              <S.Value>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                }).format(incident.value)}
              </S.Value>
              <S.Button onPress={() => navigateToDetail(incident)}>
                <S.ButtonText>Ver mais detalhes</S.ButtonText>
                <Feather name="arrow-right" size={16} color="#e02041" />
              </S.Button>
            </S.Incident>
          )}
        />
      </S.IncidentList>
    </S.Container>
  );
}
