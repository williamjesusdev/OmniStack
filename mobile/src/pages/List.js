import React, { useState, useEffect } from "react";
import socketio from "socket.io-client";
import envs from "../config/envs";

import {
  Image,
  StyleSheet,
  AsyncStorage,
  ScrollView,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Text,
  Alert
} from "react-native";

import SpotList from "../components/SpotList";

import logo from "../../assets/logo.png";

export default function List({ navigation }) {
  const baseURL = envs.URL;
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("userId").then(user_id => {
      const socket = socketio(baseURL, {
        query: { user_id }
      });

      socket.on("booking_response", booking => {
        Alert.alert(
          `Sua reserva em ${booking.spot.company} em ${booking.date} foi ${
            booking.approved ? "APROVADA" : "REJEITADA"
          }`
        );
      });
    });
  }, []);

  useEffect(() => {
    AsyncStorage.getItem("techs").then(storageTechs => {
      const techsArray = storageTechs.split(",").map(tech => tech.trim());

      setTechs(techsArray);
    });
  }, []);

  function handleCancel() {
    AsyncStorage.removeItem("userId");
    navigation.navigate("Login");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <ScrollView>
        {techs.map(tech => (
          <SpotList key={tech} tech={tech} />
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={handleCancel}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    paddingTop: Platform.OS === "android" ? 25 : 0
  },
  logo: {
    height: 32,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 5
  },
  button: {
    marginBottom: -10,
    height: 42,
    backgroundColor: "#f05a5b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  }
});
