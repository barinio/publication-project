import { StyleSheet, Text, View } from "react-native";
import Posts from "../components/PostsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePosts from "./CreatePostsScreen";
import Profile from "./ProfileScreen";

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Posts" component={Posts} />
      <Tabs.Screen name="CreatePosts" component={CreatePosts} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
