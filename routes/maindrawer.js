import React from "react";
import { Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "./customdrawer";
import { FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons";
import DrawerHeader from "../utils/shared/drawerheader";
import Browse from "../screens/appscreens/browse";
import ChatStack from "./chatstack";
import MyMatches from "../screens/appscreens/mymatches";
import Favourites from "../screens/appscreens/favourites";
import Settings from "../screens/appscreens/settings";

const drawer = createDrawerNavigator();

const DrawerLabel = ({ title, focused }) => (
  <Text
    style={{
      color: focused ? "deeppink" : "grey",
      fontWeight: focused ? "bold" : "normal",
      fontSize: focused ? 17 : 14,
    }}
  >
    {title}
  </Text>
);

export default function Drawer() {
  return (
    <drawer.Navigator
      initialRouteName="Browse"
      drawerType="float"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerContentOptions={{
        activeBackgroundColor: "#ffc4d6",
        inactiveBackgroundColor: "white",
      }}
    >
      <drawer.Screen
        name="Browse"
        options={({ navigation }) => ({
          drawerLabel: ({ focused }) => (
            <DrawerLabel title="Browse" focused={focused} />
          ),
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="group"
              color={focused ? "deeppink" : "grey"}
              size={focused ? 16 : 14}
            />
          ),
          header: () => <DrawerHeader navigation={navigation} title="Browse" />,
          headerShown: true,
        })}
      >
        {(props) => <Browse {...props} />}
      </drawer.Screen>

      <drawer.Screen
        name="Chats"
        options={{
          drawerLabel: ({ focused }) => (
            <DrawerLabel title="Messages" focused={focused} />
          ),
          drawerIcon: ({ focused }) => (
            <Ionicons
              name="md-chatbubble"
              size={focused ? 16 : 14}
              color={focused ? "deeppink" : "grey"}
            />
          ),
        }}
      >
        {(props) => <ChatStack {...props} />}
      </drawer.Screen>

      <drawer.Screen
        name="MyMatches"
        options={({ navigation }) => ({
          drawerLabel: ({ focused }) => (
            <DrawerLabel title="My matches" focused={focused} />
          ),
          drawerIcon: ({ focused }) => (
            <Ionicons
              name="ios-heart"
              size={focused ? 16 : 14}
              color={focused ? "deeppink" : "grey"}
            />
          ),
          header: () => (
            <DrawerHeader navigation={navigation} title="Mutual Like" />
          ),
          headerShown: true,
        })}
      >
        {(props) => <MyMatches {...props} />}
      </drawer.Screen>

      <drawer.Screen
        name="Favourites"
        options={({ navigation }) => ({
          drawerLabel: ({ focused }) => (
            <DrawerLabel title="Favourites" focused={focused} />
          ),
          drawerIcon: ({ focused }) => (
            <Ionicons
              name="md-star"
              size={focused ? 16 : 14}
              color={focused ? "deeppink" : "grey"}
            />
          ),
          header: () => (
            <DrawerHeader
              navigation={navigation}
              title="Favourites"
              favcount={12}
            />
          ),
          headerShown: true,
        })}
      >
        {(props) => <Favourites {...props} />}
      </drawer.Screen>

      <drawer.Screen
        name="Settings"
        options={({ navigation }) => ({
          drawerLabel: ({ focused }) => (
            <DrawerLabel title="Settings" focused={focused} />
          ),
          drawerIcon: ({ focused }) => (
            <Ionicons
              name="ios-settings-sharp"
              size={focused ? 16 : 14}
              color={focused ? "deeppink" : "grey"}
            />
          ),
          header: () => (
            <DrawerHeader navigation={navigation} title="Settings" />
          ),
          headerShown: true,
        })}
      >
        {(props) => <Settings {...props} />}
      </drawer.Screen>
    </drawer.Navigator>
  );
}
