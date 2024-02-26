import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Registration = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onAvatarAdd = () => {};
  const onShowPassword = () => {};
  const onRegistration = () => {};
  const onLogin = () => {};

  return (
    <View style={s.container}>
      <View style={s.avatarBox}>
        <TouchableOpacity onPress={onAvatarAdd} style={s.iconAdd}>
          <Ionicons name="add-circle-outline" size={25} color="#FF6C00" />
        </TouchableOpacity>
      </View>
      <Text style={[s.text, { fontWeight: "500" }]}>Реєстрація</Text>
      <View style={s.form}>
        <TextInput
          placeholder="Логін"
          value={login}
          onChangeText={setLogin}
          style={s.input}
        />
        <TextInput
          placeholder="Адреса електронної пошти"
          value={email}
          onChangeText={setEmail}
          style={s.input}
        />
        <View>
          <TextInput
            placeholder="Пароль"
            value={password}
            onChangeText={setPassword}
            style={s.input}
          />
          <TouchableOpacity onPress={onShowPassword} style={s.showPassword}>
            <Text style={s.showPasswordText}>Показати</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onRegistration} style={s.btn}>
          <Text style={s.btnText}>Зареєстуватися</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onLogin}>
          <Text style={s.exists}>Вже є акаунт? Увійти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    height: 549,
    backgroundColor: "#FFFFFF",
    marginTop: 263,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingBottom: 78,
    paddingHorizontal: 16,
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
    top: 16,
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

export default Registration;
