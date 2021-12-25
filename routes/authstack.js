import React from "react";
import { Pressable, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthHome from "../screens/authscreens/authhome";
import Login from "../screens/authscreens/login";
import Signup from "../screens/authscreens/signup";
import ForgotPw from "../screens/authscreens/forgotpw";
import TakePhoto from "../screens/authscreens/takephoto";
import { styleSheets } from "min-document";

const stack = createStackNavigator();

export default function AuthStack() {
  return (
    <stack.Navigator
      initialRouteName="AuthHome"
      screenOptions={{
        headerTintColor: "white",
        title: "",
        headerTransparent: true,
      }}
    >
      <stack.Screen name="AuthHome">
        {(props) => <AuthHome {...props} />}
      </stack.Screen>
      <stack.Screen name="Login">
        {(props) => <Login {...props} />}
      </stack.Screen>
      <stack.Screen name="Signup">
        {(props) => <Signup {...props} />}
      </stack.Screen>
      <stack.Screen name="ForgotPw">
        {(props) => <ForgotPw {...props} />}
      </stack.Screen>
      <stack.Screen
        options={({ navigation }) => ({
          headerLeft: null,
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("AppStack")}>
              <Text style={{ marginHorizontal: 16, color: "white" }}>Skip</Text>
            </Pressable>
          ),
        })}
        name="TakePhoto"
      >
        {(props) => <TakePhoto {...props} />}
      </stack.Screen>
    </stack.Navigator>
  );
}
