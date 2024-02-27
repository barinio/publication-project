import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";

import bgImage from "../assets/bg-auth.jpg";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Formik } from "formik";

type RootStackParamList = {
  Register: undefined;
  Home: undefined;
};
type NavigationProp = StackNavigationProp<RootStackParamList, "Register">;

const Login = () => {
  const navigation = useNavigation<NavigationProp>();

  const onShowPassword = () => {};

  return (
    <View>
      <ImageBackground source={bgImage} resizeMode="cover" style={s.image}>
        <View style={s.container}>
          <Text style={[s.text, { fontWeight: "500" }]}>Увійти</Text>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => console.log(values)}
          >
            {(props) => (
              <View style={s.form}>
                <TextInput
                  placeholder="Адреса електронної пошти"
                  value={props.values.email}
                  onChangeText={props.handleChange("email")}
                  style={s.input}
                />
                <View>
                  <TextInput
                    placeholder="Пароль"
                    value={props.values.password}
                    onChangeText={props.handleChange("password")}
                    style={s.input}
                  />
                  <Pressable onPress={onShowPassword} style={s.showPassword}>
                    <Text style={s.showPasswordText}>Показати</Text>
                  </Pressable>
                </View>
                <TouchableOpacity
                  // onPress={props.handleSubmit}
                  onPress={() => navigation.navigate("Home")}
                  style={s.btn}
                >
                  <Text style={s.btnText}>Увійти</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Register")}
                >
                  <Text style={s.exists}>Немає акаунту? Зареєструватися</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </ImageBackground>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    height: 489,
    backgroundColor: "#FFFFFF",
    marginTop: 323,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  image: {
    height: "100%",
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    color: "#212121",
    marginBottom: 32,
  },
  form: {
    flex: 1,
    gap: 16,
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 15,
    fontSize: 16,
    height: 50,
  },
  showPassword: {
    position: "absolute",
    right: 16,
    bottom: 15,
  },
  showPasswordText: {
    color: "#1B4371",
    fontSize: 16,
  },
  btn: {
    marginTop: 43,
    borderRadius: 100,
    paddingVertical: 16,
    backgroundColor: "#FF6C00",
  },
  btnText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 18.75,
  },
  exists: {
    fontSize: 16,
    lineHeight: 18.75,
    color: "#1B4371",
    textAlign: "center",
  },
});

export default Login;
