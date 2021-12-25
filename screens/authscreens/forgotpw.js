import React, { useContext } from "react";
import { View, ImageBackground, Text, StyleSheet } from "react-native";
import Button from "../../utils/shared/flatbtn";
import { width, height } from "../../utils/dimensions";
import { globalstyles } from "../../utils/styles/globalstyles";
import { FormInput } from "../../components/forminput";
import { BgimgContext } from "../../context/bgimgcontext";

export default function ForgotPw({ navigation }) {
  const bgimg = useContext(BgimgContext);
  return (
    <ImageBackground blurRadius={50} style={globalstyles.bgImg} source={bgimg}>
      <View style={globalstyles.container}>
        <Text style={styles.formTitle}>Forgot password</Text>

        <Text style={globalstyles.snippet}>
          Enter your email address, we'll send you the instructions on how to
          change your password
        </Text>

        <FormInput
          labelName="EMAIL ADDRESS"
          placeholder="name.lastname@test.com"
          keyboardType="email-address"
        />

        <View style={globalstyles.btnWrap}>
          <Button
            style={{ backgroundColor: "deeppink", width: width * 0.4 }}
            text={"SEND"}
            onPress={() => alert("Sended.")}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  formTitle: {
    left: -3,
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
    marginVertical: height * 0.025,
  },
});
