import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";

import Register from "./components/RegistrationScreen";
import Login from "./components/LoginScreen";
import Home from "./screens/Home";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Register"
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen name="Register" component={Register} />
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="Home" component={Home} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const s = StyleSheet.create({
  container: {},
});
