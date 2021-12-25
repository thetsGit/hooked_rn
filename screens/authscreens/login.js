import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Button from "../../utils/shared/flatbtn";
import { width, height } from "../../utils/dimensions";
import { FormInput } from "../../components/forminput";
import { globalstyles } from "../../utils/styles/globalstyles";
import { BgimgContext } from "../../context/bgimgcontext";

export default function Login({ navigation }) {
  const bgimg = useContext(BgimgContext);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <ImageBackground blurRadius={50} style={globalstyles.bgImg} source={bgimg}>
      <View style={globalstyles.container}>
        <Text style={globalstyles.formTitle}>Login</Text>

        <FormInput
          labelName="EMAIL ADDRESS"
          placeholder="name.lastname@test.com"
          keyboardType="email-address"
          value={email}
          onChangeText={(val) => setemail(val)}
        />
        <FormInput
          labelName="PASSWORD"
          placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
          secureTextEntry={true}
          value={password}
          onChangeText={(val) => setpassword(val)}
        />

        <View style={globalstyles.btnWrap}>
          <Button
            style={{ backgroundColor: "deeppink", width: width * 0.3 }}
            text={"LOGIN"}
            onPress={() => navigation.navigate("AppStack")}
          />

          <TouchableOpacity onPress={() => navigation.navigate("ForgotPw")}>
            <Text style={globalstyles.navText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={globalstyles.navText}>
              Don't have an account? Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: width,
    position: "absolute",
    overflow: "hidden",
    height: height * 0.06,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
});
