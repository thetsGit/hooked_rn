import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  Pressable,
  Switch,
} from "react-native";
import { width, height } from "../../utils/dimensions";

const Category = ({ text }) => <Text style={styles.cateWrap}>{text}</Text>;
const Option = ({ name, value, noborder, children }) => (
  <View
    style={[
      styles.optionWrap,
      { borderBottomWidth: !noborder ? StyleSheet.hairlineWidth : 0 },
    ]}
  >
    <Text style={styles.name}>{name}</Text>
    {value ? <Text style={styles.value}>{value}</Text> : children}
  </View>
);

export default function Settings() {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/settingbg.jpg")}
        blurRadius={8}
        style={{
          width: width,
          height: height * 0.28,
          resizeMode: "cover",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>You're on our free plan</Text>
        <Text style={styles.snippet}>
          You want to make the most out of Hooked?
        </Text>
        <Pressable style={styles.btn} onPress={() => alert("Upgraded !")}>
          <Text style={styles.btnText}>Upgrade to PRO</Text>
        </Pressable>
      </ImageBackground>
      <Category text="GENERAL" />
      <Option name="My current location" value="London, UK" />
      <Option name="Search radius" value="50km" />
      <Option name="Gender preference" value="Male" noborder={true} />
      <Category text="PRIVACY" />
      <Option name="Push notifications">
        <Switch
          trackColor={{ false: "#767577", true: "deepskyblue" }}
          thumbColor="#f4f3f4"
          onChange={() => setIsEnabled1((preval) => !preval)}
          value={isEnabled1}
        />
      </Option>
      <Option name="Incognito browsing">
        <Switch
          trackColor={{ false: "#767577", true: "deepskyblue" }}
          thumbColor="#f4f3f4"
          onChange={() => setIsEnabled2((preval) => !preval)}
          value={isEnabled2}
        />
      </Option>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
    color: "white",
  },
  snippet: {
    color: "white",
    marginBottom: 15,
    fontSize: 12,
  },
  btn: {
    width: width * 0.4,
    paddingVertical: height * 0.01,
    backgroundColor: "white",
    borderRadius: (width * 0.3) / 2,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    shadowColor: "#ddd",
    shadowOpacity: 0.5,
  },
  btnText: {
    color: "deeppink",
    fontWeight: "bold",
  },
  cateWrap: {
    fontWeight: "bold",
    color: "grey",
    borderBottomColor: "lightgrey",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopColor: "lightgrey",
    borderTopWidth: StyleSheet.hairlineWidth,
    width: width,
    letterSpacing: 2,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#ebe6ec",
  },
  optionWrap: {
    marginHorizontal: 8,
    width: width - 32,
    paddingVertical: 18,
    borderBottomColor: "lightgrey",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  value: {
    color: "deeppink",
  },
});
