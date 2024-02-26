import { StyleSheet, Text, TextInput, View } from "react-native";

const Registration = () => {
  return (
    <View style={s.container}>
      <Text style={[s.text, { fontWeight: "500" }]}>Реєстрація</Text>
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
  text: {
    fontSize: 30,
    textAlign: "center",
    color: "#212121",
  },
});

export default Registration;
