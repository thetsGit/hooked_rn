import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Chats from "../screens/appscreens/chats";
import Chat from "../screens/appscreens/chat";
import DrawerHeader from "../utils/shared/drawerheader";

const stack = createStackNavigator();

export default function ChatStack({ navigation }) {
  return (
    <stack.Navigator
      initialRouteName="chats"
      screenOptions={{
        headerTintColor: "black",
      }}
    >
      <stack.Screen
        name="chats"
        options={({ navigation }) => ({
          header: () => (
            <DrawerHeader navigation={navigation} title="Messages" />
          ),
        })}
      >
        {(props) => <Chats {...props} />}
      </stack.Screen>
      <stack.Screen name="chat">{(props) => <Chat {...props} />}</stack.Screen>
    </stack.Navigator>
  );
}
