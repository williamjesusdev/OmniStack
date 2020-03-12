import React, { useState } from "react";
import {
  Alert,
  AsyncStorage,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform
} from "react-native";

import api from "../services/api";

export default function Book({ navigation }) {
  const [date, setDate] = useState("");
  const id = navigation.getParam("id");

  async function handleSubmit() {
    const user_id = await AsyncStorage.getItem("userId");

    await api.post(`/spots/${id}/bookings`, { date }, { headers: { user_id } });

    Alert.alert("Solicitação de reserva enviada");

    navigation.navigate("List");
  }

  function handleCancel() {
    navigation.navigate("List");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>DATA DE INTERESSE *</Text>
      <TextInput
        style={styles.input}
        placeholder="qual data você quer reservar?"
        placeholderTextColor="#999"
        autoCapitalize="none"
        autoCorrect={false}
        value={date}
        onChangeText={setDate}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Solicitar reserva</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.cancelButton]}
        onPress={handleCancel}
      >
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    paddingTop: Platform.OS === "android" ? 50 : 0
  },
  label: {
    fontWeight: "bold",
    color: "#444",
    marginBottom: 0
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  },
  button: {
    marginTop: 10,
    height: 42,
    backgroundColor: "#f05a5b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2
  },
  cancelButton: {
    backgroundColor: "#ccc"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  }
});
