import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { height } from "../dimensions";
import { Feather } from "@expo/vector-icons";

export default function SearchBox({ text }) {
  return (
    <View style={styles.searchWrap}>
      <View style={styles.searchBox}>
        <Feather
          style={{ paddingRight: 10 }}
          name="search"
          size={17}
          color="grey"
        />
        <TextInput style={styles.input} placeholder={text} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchWrap: {
    width: "100%",
    height: height * 0.08,
    backgroundColor: "#d3d3d3",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBox: {
    width: "90%",
    height: 30,
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
