import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { width, height } from "../utils/dimensions";

export const Chatwrap = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",

        backgroundColor: "pink",
      }}
    >
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require("../assets/images/homebg.jpg")}
        />

        <Text style={styles.onlineText}>ONLINE</Text>
        <View style={styles.textWrap}>
          <Text style={styles.name}>Mark</Text>
          <Text style={styles.messageText} numberOfLines={1}>
            Where are you from?I am from florida.
          </Text>
        </View>
        <Text style={styles.sendTime}>9:30 pm</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: width - 35,
    backgroundColor: "white",
    alignSelf: "center",
    height: (width - 35) * 0.2,
    marginVertical: 8,
    alignItems: "center",
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
  },
  messageText: {
    fontSize: 14,
    color: "grey",
    width: "80%",
    overflow: "hidden",
  },
  sendTime: {
    position: "absolute",
    top: 0,
    right: 0,
    color: "grey",
  },
  img: {
    width: "20%",
    height: (width - 35) * 0.2,
    borderRadius: (width * 0.2) / 2,
    marginRight: 16,
  },
  onlineText: {
    fontWeight: "bold",
    fontSize: 11,
    backgroundColor: "green",
    color: "white",
    position: "absolute",
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 5,
    textAlign: "center",
    left: width * 0.025,
    bottom: -width * 0.02,
  },
  textWrap: {
    width: "80%",
    overflow: "hidden",
    flexDirection: "column",
  },
});
