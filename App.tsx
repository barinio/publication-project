import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import bgImage from "./assets/bg-auth.jpg";
import Registration from "./components/RegistrationScreen";

export default function App() {
  return (
    <View style={s.container}>
      <ImageBackground source={bgImage} resizeMode="cover" style={s.image}>
        <Registration />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const s = StyleSheet.create({
  container: {},
  image: {
    height: "100%",
  },
});
