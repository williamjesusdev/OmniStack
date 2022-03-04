import React, { useEffect, useState } from "react";
import { Image, View, Text, TextInput, TouchableOpacity } from "react-native";
import Mapview, { Marker, Callout } from "react-native-maps";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";
import api from "../services/api";
import { connect, disconnect, subscribeToNewDevs } from "../services/socket";

function Main({ navigation }) {
  const [initialRegion, setInitialRegion] = useState(null);
  const [GPSRegion, setGPSRegion] = useState(null);
  const [currentRegion, setCurrentRegion] = useState(null);
  const [techs, setTechs] = useState("");
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestForegroundPermissionsAsync();
      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
        const { latitude, longitude } = coords;
        const region = {
          latitude,
          longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.011,
        };
        setCurrentRegion(region);
        setInitialRegion(region);
        setGPSRegion(region);
      }
    }
    loadInitialPosition();
  }, []);

  useEffect(() => {
    subscribeToNewDevs((dev) => setDevs([...devs, dev]));
  }, [devs]);

  function setupWebSocket() {
    disconnect();

    const { latitude, longitude } = currentRegion;

    connect(latitude, longitude, techs);
  }

  async function loadDevs() {
    const { latitude, longitude } = currentRegion;
    api
      .get("/search", {
        params: {
          latitude,
          longitude,
          techs,
        },
      })
      .then((response) => {
        setDevs(response.data.devs);
        setInitialRegion(null);
        setupWebSocket();
      })
      .catch((err) => console.error({ ...err }));
  }

  async function loadLocation() {
    setInitialRegion(GPSRegion);
    setCurrentRegion(GPSRegion);
  }

  async function handleRegionChange(region) {
    setCurrentRegion(region);
  }

  if (!currentRegion) {
    return null;
  }

  return (
    <>
      <Mapview
        onRegionChangeComplete={handleRegionChange}
        style={styles.map}
        initialRegion={currentRegion}
        region={currentRegion}
      >
        {initialRegion !== null ? (
          <Marker
            key="initial"
            coordinate={{
              latitude: initialRegion.latitude,
              longitude: initialRegion.longitude,
            }}
          >
            <MaterialIcons name="room" size={50} color="#8e4dff" />
            <Callout>
              <View style={styles.callout}>
                <Text style={styles.devName}>Você está aqui!</Text>
                <Text style={styles.devBio}>
                  Utilize a busca para encontrar Devs no raio de 10km com as
                  techs que você desejar
                </Text>
                <Text style={styles.devTechs}>Obs: separadas por virgula</Text>
              </View>
            </Callout>
          </Marker>
        ) : (
          devs.map((dev) => (
            <Marker
              key={dev._id}
              coordinate={{
                latitude: dev.location.coordinates[1],
                longitude: dev.location.coordinates[0],
              }}
            >
              <Image
                style={styles.avatar}
                source={{
                  uri: dev.avatar_url,
                }}
              />
              <Callout
                onPress={() => {
                  navigation.navigate("Profile", {
                    github_username: dev.github_username,
                  });
                }}
              >
                <View style={styles.callout}>
                  <Text style={styles.devName}>{dev.name}</Text>
                  <Text style={styles.devBio}>{dev.bio}</Text>
                  <Text style={styles.devTechs}>{dev.techs.join(", ")}</Text>
                </View>
              </Callout>
            </Marker>
          ))
        )}
      </Mapview>
      <View style={styles.searchForm}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar devs por techs..."
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
        />
        <TouchableOpacity onPress={loadDevs} style={styles.loadButton}>
          <MaterialIcons name="search" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={loadLocation} style={styles.loadButton}>
          <MaterialIcons name="my-location" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Main;
