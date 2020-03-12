import React, { useState, useEffect } from "react";
import { withNavigation } from "react-navigation";
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";

import api from "../services/api";

function SpotList({ tech, navigation }) {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get(`/spots`, { params: { tech } });

      setSpots(response.data);
    }

    loadSpots();
  }, []);

  function handleNavigate(id) {
    navigation.navigate("Book", { id });
  }

  return (
    <View style={styles.container}>
      {spots.length != 0 ? (
        <Text style={styles.title}>
          Empresas que usam <Text style={styles.bold}>{tech}</Text>
        </Text>
      ) : (
        <>
          <Text style={styles.subtitle}>Despulpe-nos!</Text>
          <Text style={styles.title}>
            <Text>
<<<<<<< HEAD
              Não encontramos nenhum local com a tecnologia
=======
              Ainda não encontramos nenhum local com a tecnologia
>>>>>>> 13e1e4629e991da96fd0475be008ce2782e6a245
              <Text style={styles.bold}> {tech}</Text>
            </Text>
          </Text>
        </>
      )}
      <FlatList
        style={styles.list}
        data={spots}
        keyExtractor={spot => spot._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image
              style={styles.thumbnail}
              source={{ uri: item.thumbnail_url }}
            />
            <Text style={styles.company}>{item.company.substr(0, 12)}</Text>
            <Text>{item.techs.map(tech => "| " + tech + " ")}</Text>
            <Text style={styles.price}>
              {item.price ? `${item.price} /dia` : "GRATUITO"}
            </Text>
            <TouchableOpacity
              onPress={() => handleNavigate(item._id)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Solicitar reserva</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 10
  },
  title: {
    fontSize: 20,
    color: "#444",
    paddingHorizontal: 15,
    marginBottom: 15
  },
  subtitle: {
    fontSize: 20,
    color: "#444",
    paddingHorizontal: 15,
    //textAlignVertical: "center",
    textAlign: "center",
    fontWeight: "bold"
  },
  bold: {
    fontWeight: "bold"
  },
  list: {
    marginHorizontal: 15
  },
  listItem: {
    marginRight: 15
  },
  thumbnail: {
    width: 180,
    height: 120,
    resizeMode: "cover",
    borderRadius: 2
  },
  company: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10
  },
  price: {
    fontSize: 15,
    color: "#999",
    marginTop: 5
  },
  button: {
    height: 32,
    marginTop: 15,
    backgroundColor: "#f05a5b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15
  }
});

export default withNavigation(SpotList);
