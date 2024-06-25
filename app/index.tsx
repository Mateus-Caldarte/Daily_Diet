import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { ActivityIndicator, StatusBar } from "react-native";
import theme from "@theme/index";
import AppStack from "../src/routes";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

export default function HomeScreen() {
  useEffect(() => {
    StatusBar.setBarStyle("dark-content", true);
    StatusBar.setBackgroundColor("#FAFAFA");
  }, []);

  const [FontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {FontsLoaded ? <AppStack /> : <ActivityIndicator style={{ flex: 1 }} />}
    </ThemeProvider>
  );
}
