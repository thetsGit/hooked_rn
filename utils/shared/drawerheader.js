import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { height } from "../dimensions";

export default function DrawerHeader({ navigation, title, favcount }) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="md-menu"
        size={24}
        color="black"
        onPress={() => navigation.openDrawer()}
      />
      <View style={styles.titleWrap}>
        <Text style={styles.title}>{title}</Text>
        {favcount !== undefined ? (
          <Text style={styles.favcount}>{favcount} users</Text>
        ) : null}
      </View>
      <Pressable onPress={() => navigation.navigate("Chats")}>
        <Ionicons name="chatbubble" size={24} color="black" />
        <View
          style={{
            position: "absolute",
            backgroundColor: "red",
            borderRadius: 5,
            paddingHorizontal: 2,
            paddingVertical: 1,
            top: 0,
            right: -2,
            borderColor: "white",
            borderWidth: 1,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 7, color: "white" }}>
            12
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
    height: height * 0.12,
    shadowColor: "#ddd",
    shadowRadius: 10,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  titleWrap: {
    justifyContent: "center",
    alignItems: "center",
  },
  favcount: {
    fontSize: 11,
    color: "grey",
  },
});
