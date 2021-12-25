import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./authstack";
import AppStack from "./maindrawer";

const stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <stack.Navigator headerMode="none" headerShown={false}>
        <stack.Screen name="AuthStack">
          {(props) => <AuthStack {...props} />}
        </stack.Screen>
        <stack.Screen name="AppStack">
          {(props) => <AppStack {...props} />}
        </stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}
