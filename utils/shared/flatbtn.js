import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { height } from "../dimensions";

export default Button = ({ style, text, ...rest }) => (
  <TouchableOpacity style={[styles.btnContainer, style]} {...rest}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btnContainer: {
    height: height * 0.08,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      height: 5,
      width: 5,
    },
    elevation: 3,
    shadowColor: "#ddd",
    shadowRadius: 8,
    marginVertical: height * 0.01,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});
