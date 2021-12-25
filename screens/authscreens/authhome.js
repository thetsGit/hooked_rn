import React, { useContext } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Button from "../../utils/shared/flatbtn";
import { width, height } from "../../utils/dimensions";
import { globalstyles } from "../../utils/styles/globalstyles";
import { BgimgContext } from "../../context/bgimgcontext";

export default function AuthHome({ navigation }) {
  const bgimg = useContext(BgimgContext);
  return (
    <ImageBackground style={globalstyles.bgImg} source={bgimg}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Hooked</Text>
          <Text style={styles.snippet}>
            Flirt, chat and meet people around you
          </Text>
        </View>

        <View style={styles.btnWrap}>
          <Button
            style={{ backgroundColor: "deeppink", width: width * 0.7 }}
            text={"SIGN UP NOW"}
            onPress={() => navigation.navigate("Signup")}
          />

          <Button
            style={{ backgroundColor: "grey", width: width * 0.7 }}
            text={"LOGIN"}
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    color: "white",
    fontSize: 25,
    marginTop: height * 0.13,
    fontWeight: "bold",
    letterSpacing: 2,
    textAlign: "center",
  },
  snippet: {
    color: "lightgrey",
    fontSize: 13,
    textAlign: "center",
  },
  btnWrap: {
    marginVertical: height * 0.029,
    alignItems: "center",
  },
});
