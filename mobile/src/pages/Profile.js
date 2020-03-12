import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import styles from "./styles";

//import styles from "./styles";

function Profile({ navigation }) {
  const github = navigation.getParam("github_username");
  return (
    <WebView
      source={{ uri: `https://github.com/${github}` }}
      style={styles.map}
    />
  );
}

export default Profile;
