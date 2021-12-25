import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { height } from "../utils/dimensions";

export const FormInput = ({ labelName, ...rest }) => (
  <View style={styles.inputWrap}>
    <Text style={styles.label}>{labelName}</Text>
    <TextInput style={styles.input} {...rest} />
  </View>
);

const styles = StyleSheet.create({
  inputWrap: {
    marginBottom: height * 0.039,
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    marginBottom: height * 0.017,
  },
  input: {
    color: "lightgrey",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "white",
  },
});
