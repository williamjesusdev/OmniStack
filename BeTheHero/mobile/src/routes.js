import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { ThemeProvider } from "styled-components";

const AppStack = createStackNavigator();

import Incidents from "./pages/Incidents";
import Detail from "./pages/Detail";

import { dark, light } from "./styles/theme";

export default function Routes() {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(scheme);

  return (
    <AppearanceProvider>
      <ThemeProvider theme={theme === "dark" ? dark : light}>
        <NavigationContainer>
          <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Incidents" component={Incidents} />
            <AppStack.Screen name="Detail" component={Detail} />
          </AppStack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </AppearanceProvider>
  );
}
