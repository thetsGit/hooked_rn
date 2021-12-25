import React, { useContext, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Button from "../../utils/shared/flatbtn";
import { width } from "../../utils/dimensions";
import { globalstyles } from "../../utils/styles/globalstyles";
import { FormInput } from "../../components/forminput";
import { BgimgContext } from "../../context/bgimgcontext";

export default function Signup({ navigation }) {
  const bgimg = useContext(BgimgContext);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <ImageBackground blurRadius={50} style={globalstyles.bgImg} source={bgimg}>
      <ScrollView contentContainerStyle={globalstyles.overflowContainer}>
        <Text style={globalstyles.formTitle}>Sign up</Text>

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
            text={"SIGNUP"}
            onPress={() => navigation.navigate("TakePhoto")}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={globalstyles.navText}>Already a member?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
