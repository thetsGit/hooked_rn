import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Button from "../../utils/shared/flatbtn";
import { width, height } from "../../utils/dimensions";
import { Ionicons } from "@expo/vector-icons";
import { BgimgContext } from "../../context/bgimgcontext";
import * as ImagePicker from "expo-image-picker";

export default function TakePhoto({ navigation }) {
  const bgimg = useContext(BgimgContext);

  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    navigation.navigate("AppStack");

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <ImageBackground blurRadius={50} style={styles.bgImg} source={bgimg}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cameraIllu}>
            <Ionicons
              name="ios-camera"
              size={width * 0.1}
              color="deepskyblue"
            />
          </View>

          <Text style={styles.title}>Take a selfie</Text>
          <Text style={styles.snippet}>Show us how you look and </Text>
          <Text style={styles.snippet}>get more chances to meet people!</Text>
          <View style={styles.btnWrap}>
            <Button
              style={{ backgroundColor: "deeppink", width: width * 0.4 }}
              text={"TAKE PHOTO"}
              onPress={() => pickImage()}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.135,
    justifyContent: "center",
  },
  bgImg: {
    flex: 1,
    resizeMode: "cover",
  },
  card: {
    shadowOffset: { width: 5, height: 5 },
    elevation: 8,
    shadowColor: "#ddd",
    shadowRadius: 3,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  title: {
    marginTop: height * 0.07,
    marginBottom: height * 0.01,
    fontWeight: "bold",
  },
  snippet: {
    color: "grey",
  },
  cameraIllu: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: (width * 0.2) / 2,
    top: -width * 0.1,
    position: "absolute",
    borderWidth: width * 0.02,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  btnWrap: {
    marginTop: height * 0.025,
    marginBottom: height * 0.04,
  },
});
