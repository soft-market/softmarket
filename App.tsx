import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";
import { dark, light } from "./constants/Theme";
import useCachedResources from "./hooks/useCachedResources";
import FirstInitScreen from "./screens/FirstInitScreen";
import StorybookUI from "./storybook";
import Config from "react-native-config";

function App() {
  const isLoadingComplete = useCachedResources();
  const color = useColorScheme();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ThemeProvider theme={color === "dark" ? dark : light}>
          <NavigationContainer>
            <FirstInitScreen />
          </NavigationContainer>
          <StatusBar />
        </ThemeProvider>
      </SafeAreaProvider>
    );
  }
}

export default Config.LOAD_STORYBOOK === "true" ? StorybookUI : App;
