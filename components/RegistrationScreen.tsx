import { useState } from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};
type NavigationProp = StackNavigationProp<RootStackParamList, "Login">;

import bgImage from "../assets/bg-auth.jpg";
import { Formik } from "formik";

const Register = () => {
  const navigation = useNavigation<NavigationProp>();

  const onAvatarAdd = () => {};
  const onShowPassword = () => {};

  return (
    <View>
      <ImageBackground source={bgImage} resizeMode="cover" style={s.image}>
        <View style={s.container}>
          <View style={s.avatarBox}>
            <TouchableOpacity onPress={onAvatarAdd} style={s.iconAdd}>
              <Ionicons name="add-circle-outline" size={25} color="#FF6C00" />
            </TouchableOpacity>
          </View>
          <Text style={[s.text, { fontWeight: "500" }]}>Реєстрація</Text>
          <Formik
            initialValues={{ login: "", email: "", password: "" }}
            onSubmit={(values) => console.log(values)}
          >
            {(props) => (
              <View style={s.form}>
                <TextInput
                  placeholder="Логін"
                  value={props.values.login}
                  onChangeText={props.handleChange("login")}
                  style={s.input}
                />
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
                  <Text style={s.btnText}>Зареєстуватися</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text style={s.register}>Вже є акаунт? Увійти</Text>
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
    height: 549,
    backgroundColor: "#FFFFFF",
    marginTop: 263,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingBottom: 78,
    paddingHorizontal: 16,
  },
  image: {
    height: "100%",
  },
  avatarBox: {
    position: "absolute",
    top: -60,
    left: 128,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  iconAdd: {
    position: "absolute",
    bottom: 14,
    right: -12,
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
  register: {
    fontSize: 16,
    lineHeight: 18.75,
    color: "#1B4371",
    textAlign: "center",
  },
});

export default Register;
